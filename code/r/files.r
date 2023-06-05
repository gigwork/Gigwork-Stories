############################################################################
############################################################################
###                                                                      ###
###                                  AIM                                 ###
###                       GENERATE DATA FOR WEBSITE                      ###
###                                                                      ###
############################################################################
############################################################################
############################################################################
############################################################################
###                                                                      ###
###                               LIBRARYS                               ###
###                                                                      ###
############################################################################
############################################################################
pkgs = c("sf",
         "dplyr",
         "lubridate",
         "stringr",
         "ggplot2",
         "ggpubr",
         "foreach",
         "doParallel")
installed_pkgs = pkgs %in% rownames(installed.packages())
if (any(installed_pkgs == FALSE)) {
  install.packages[!installed_pkgs]
}
invisible(lapply(pkgs, library, character.only = TRUE))
rm(installed_pkgs, pkgs)
###########################################################################
###########################################################################
###                                                                     ###
###                              FUNCTIONS                              ###
###                                                                     ###
###########################################################################
###########################################################################
# FUNCTION 1. GENERATE CUSTOM GGPLOT2 THEME ----------------------------------------
dark_theme = function() {
  theme(
    # add border 1)
    panel.border = element_rect(
      colour = "white",
      fill = NA,
      linetype = 2
    ),
    # color background 2)
    panel.background = element_rect(fill = "black"),
    # modify grid 3)
    panel.grid.major.x = element_line(
      colour = "#BEB7A4",
      linetype = 3,
      size = 0.5
    ),
    panel.grid.minor.x = element_blank(),
    panel.grid.minor.y = element_blank(),
    panel.grid.major = element_blank(),
    panel.grid.minor = element_blank(),
    # modify text, axis and colour 4) and 5)
    axis.text = element_text(
      colour = "#BEB7A4",
      face = "italic",
      family = "sans"
    ),
    axis.title = element_text(colour = "white", family = "sans"),
    axis.ticks = element_line(colour = "white"),
    plot.background = element_rect(fill = "black"),
    plot.title = element_text(colour = "white"),
    plot.subtitle = element_text(colour = "white"),
    legend.background = element_rect(fill = "black"),
    legend.text  = element_text(color = "white"),
    # legend at the bottom 6)
    legend.position = "bottom"
  )
}
# FUNCTION 2. GENERATE RIDER GEOJSON ----------------------------------------
gen_rider_route = function(rider_gpx) {
  # READ DATA FOR ROUTE DATASET
  route = st_read(rider_gpx, layer = "tracks") %>% select(geometry)
  #CONVERT DATA INTO LINESTRING
  route = st_as_sf(route) %>% st_cast("LINESTRING")
}

# FUNCTION 3. GENERATE RIDER ROUTE DATA
gen_rider_data = function(rider_gpx,
                          work_day,
                          start_time,
                          meta,
                          mode,
                          rider_name) {

# Read GPX File -----------------------------------------------------------

  # READ DATA FOR MAIN DATASET
  track = st_read(rider_gpx, layer = "track_points") %>%
    select(time, ele, geometry) %>%
    mutate(work_date = ymd_hms(paste(work_day, start_time, sep = " ")),
           time = ymd_hms(time))

  message("Working on time...")


# Reconfigure Time --------------------------------------------------------
  t1 <- track$time[1]
  t2 <- c(track$time[-1], NA)

  track$time <- ymd_hms(t1 + seconds(as.numeric(difftime(t2, t1, units = "secs"))))


# Calculate Distance ------------------------------------------------------
  message("Working On Distance")
  # Set the number of cores to utilize
  num_cores <- detectCores()
  registerDoParallel(num_cores)

  # CALCULATE DISTANCE
  distances <- foreach(i = 1:(nrow(track) - 1), .combine = c) %dopar% {
    sf::st_distance(track$geometry[i], track$geometry[i + 1])
  }
  distances =as.numeric(append(distances,'0',after=0))
  track$dist = distances
  track$dist_km <- track$dist / 1000  # Convert to km

  # CALCULATE TOTAL DISTANCE
  track$dist_total <- cumsum(track$dist_km)

  message("Calculating speed")
  #  CALCULATE TIME AND SPEED
  for (i in 1:nrow(track)) {
    track$time_2[i] = paste(track$time[i + 1])
  }
  track$time_2 = ymd_hms(track$time_2)

  track$diff_time = as.numeric(difftime(track$time_2, track$time, units = "hours"))
  track$speed = (track$dist / track$diff_time)
  track = track %>% filter_if( ~ is.numeric(.), all_vars(!is.infinite(.)))

  if(mode == "car"){
    track =  track %>% filter(speed < 110)
  }
  if (mode == "bike"){
    track = track %>% mutate(speed = track$speed/1000)
    track$speed= ifelse(track$speed > 50, 50, track$speed)
  }

  message("lets get plotting")

  meta = readxl::read_xlsx(meta)
  if (rider_name == "Matt") {
    meta$Earnings[8] = 3
    meta$Earnings[7] = 30
    meta$Earnings = as.numeric(meta$Earnings)
    meta$Platform = "Deliveroo"
  }
  if (rider_name == "Dianka") {
    meta$Earnings[is.na(meta$Earnings)] = 0
    meta=meta[-9,]
  }

  a = ggplot(data = track, aes(x = dist_total, y = ele)) + geom_smooth(color = "#ff5722") + xlab("Distance [km]") +
    ylab("Elevation [m]") + dark_theme()

  b =  ggplot(data = track, aes(x = time, y = speed)) + geom_line(color = "#ff5722") + xlab("Time [BST]") +
    ylab("Speed [km/h]") + dark_theme()

  if(city_build == "Manchester"){
    d = ggplot(meta, aes(x = "", y = Earnings, fill = Platform)) +
      ylab("Earnings [lei]") + xlab("") +
      geom_bar(stat = "identity", width = 14,height=12) +
      dark_theme() +
      ggtitle(rider_name,
              subtitle = paste0(
                "Total Deliveries: ",
                nrow(meta),
                "\nTotal Earnings(£): ",
                sum(meta$Earnings),
                "\nAverage Earnings(£): ",
                round(mean(meta$Earnings),2)
              ))
  }

  if(city_build == "cluj"){
    d = ggplot(meta, aes(x = "", y = Earnings, fill = Platform)) +
      ylab("Earnings [lei]") + xlab("") +
      geom_bar(stat = "identity", width = 14,height=12) +
      dark_theme() +
      ggtitle(rider_name,
              subtitle = paste0(
                "Total Deliveries:  ",
                nrow(meta),
                "\nTotal Earnings(lei): ",
                sum(meta$Earnings),
                "\nAverage Earnings(lei): ",
                round(mean(meta$Earnings),2)
              ))
  }

  if(city_build == "lyon"){
    d = ggplot(meta, aes(x = "", y = Earnings, fill = Platform)) +
      ylab("Earnings [€]") + xlab("") +
      geom_bar(stat = "identity", width = 14,height=12) +
      dark_theme() +
      ggtitle(rider_name,
              subtitle = paste0(
                "Total Deliveries: ",
                nrow(meta),
                "\nTotal Earnings(€): ",
                sum(meta$Earnings),
                "\nAverage Earnings(€): ",
                round(mean(meta$Earnings),2)
              ))
  }


  g = ggarrange(a, d, b, ncol = 1)
  g
  ggsave(
    paste0(
      "../../../Documents/Gigwork-Stories/riders/data/Lyon/",
      rider_name,
      ".jpg"
    ),
    g,
    scale = 1
  )

  track = track %>% select(time, ele, dist_km, dist_total, speed, geometry)

  # RETURN DATA
  return(track)
}
#################################################################
##                            BUILD                            ##
#################################################################
city_build = "lyon"
## Create dataframe to build analysis for Manchester
if(city_build == "manchester"){
  riders = tibble::tibble(
    rider_name = c("Adeeb",
                   "Matt",
                   "Dianka",
                   "Hazeem",
                   "Jerome"),
    mode = c("bike",
             "bike",
             "bike",
             "car",
             "bike"),
    rider_gpx = c(
      "../scrollydrive-master/riders/gpx/01. Adeeb.gpx",
      "../scrollydrive-master/riders/gpx/02. Matt.gpx",
      "../scrollydrive-master/riders/gpx/03. Dianka.gpx",
      "../scrollydrive-master/riders/gpx/04. Hazeem.gpx",
      "../scrollydrive-master/riders/gpx/05. Jérôme.gpx"
    ),
    meta = c(
      "../scrollydrive-master/riders/metadata/01. Adeeb - 21.01.2021 (Thu).xlsx",
      "../scrollydrive-master/riders/metadata/02. Matt - 30.01.2021 (Sat).xlsx",
      "../scrollydrive-master/riders/metadata/03. Dianka - 11.02.2021 (Thu).xlsx",
      "../scrollydrive-master/riders/metadata/04. Hazeem - 03.03.2021 (Wed).xlsx",
      "../scrollydrive-master/riders/metadata/05. Jérôme - 27.03.2021 (Sat).xlsx"
    ),
    work_day = c(
      "2021-01-21",
      "2021-01-30",
      "2021-02-11",
      "2021-03-03",
      "2021-03-27"
    ),
    start_time = c("12:32:00",
                   "16:34:00",
                   "07:29:00",
                   "16:26:00",
                   "10:25:00"),
    output_file = "../scrollydrive-master/riders/data/Manchester/"
  )
}
if(city_build == "cluj"){
  ## Create dataframe to build analysis for Cluj

  riders = tibble::tibble(
    rider_name = c("Mamadou",
                   "Farhod",
                   "Adrian",
                   "Elena",
                   "Elena Day 2",
                   "Liliana",
                   "Victor"),
    mode = c("bike",
             "bike",
             "car",
             "car",
             "car",
             "car",
             "car"),
    rider_gpx = c(
      "../scrollydrive-master/riders/gpx/06. Mamadou.gpx",
      "../scrollydrive-master/riders/gpx/07. Farhod.gpx",
      "../scrollydrive-master/riders/gpx/08. Adrian.gpx",
      "../scrollydrive-master/riders/gpx/09.1 Elena.gpx",
      "../scrollydrive-master/riders/gpx/09.2 Elena.gpx",
      "../scrollydrive-master/riders/gpx/10. Liliana.gpx",
      "../scrollydrive-master/riders/gpx/11. Victor.gpx"
    ),
    meta = c(
      "../scrollydrive-master/riders/metadata/06. Mamadou - 06.10.2021 (Wed).xlsx",
      "../scrollydrive-master/riders/metadata/07. Farhod - 07.10.2021 (Thu).xlsx",
      "../scrollydrive-master/riders/metadata/08. Adrian - 08.10.2021 (Fri).xlsx",
      "../scrollydrive-master/riders/metadata/09. Elena - 05.11.2021 (Fri).xlsx",
      "../scrollydrive-master/riders/metadata/09.1 Elena - 09.11.2021(Tue).xlsx",
      "../scrollydrive-master/riders/metadata/10. Liliana - 25.11.2021 (Thu).xlsx",
      "../scrollydrive-master/riders/metadata/11. Victor - 11.12.2021 (Sat).xlsx"
    ),
    work_day = c(
      "2021-10-06",
      "2021-10-07",
      "2021-10-08",
      "2021-11-05",
      "2021-11-09",
      "2021-11-25",
      "2021-12-01"
    ),
    start_time = c("10:50:00",
                   "12:00:00",
                   "11:00:00",
                   "08:00:00",
                   "19:00:00",
                   "09:00:00",
                   "09:00:00"),

    output_file = "../scrollydrive-master/riders/data/Cluj/"
  )




}
if(city_build == "lyon"){
  riders = tibble::tibble(
    rider_name = c("Abdoulaye",
                   "Sofiane Day 1",
                   "Sofiane Day 2",
                   "Ismael Day 1",
                   "Ismael Day 2",
                   "Jacob",
                   "Jawan"),
    mode = c("bike",
             "bike",
             "bike",
             "bike",
             "bike",
             "bike",
             "bike"),
    rider_gpx = c(
      "../../../Documents/Gigwork-Stories/riders/gpx/12. Abdoulaye.gpx",
      "../../../Documents/Gigwork-Stories/riders/gpx/13.1.1 Sofiane.gpx",
      "../../../Documents/Gigwork-Stories/riders/gpx/13.2 Sofiane.gpx",
      "../../../Documents/Gigwork-Stories/riders/gpx/11.1 Ismael.gpx",
      "../../../Documents/Gigwork-Stories/riders/gpx/11.2 Ismael.gpx",
      "../../../Documents/Gigwork-Stories/riders/gpx/14. Jacob.gpx",
      "../../../Documents/Gigwork-Stories/riders/gpx/15. Jawan.gpx"
    ),
    meta = c(
      "../../../Documents/Gigwork-Stories/riders/metadata/12. Abdoulaye - 27.09.2022 (Tue).xlsx",
      "../../../Documents/Gigwork-Stories/riders/metadata/Sofiane day 1.xlsx",
      "../../../Documents/Gigwork-Stories/riders/metadata/Sofiane day 2.xlsx",
      "../../../Documents/Gigwork-Stories/riders/metadata/11. Ismael day 1.xlsx",
      "../../../Documents/Gigwork-Stories/riders/metadata/Ismael day 2.xlsx",
      "../../../Documents/Gigwork-Stories/riders/metadata/14. Jacob - 18.11.2022 (Fri).xlsx",
      "../../../Documents/Gigwork-Stories/riders/metadata/15. Jawan - 15.10.2022 (Sat).xlsx"
    ),
    work_day = c(
      "2022-09-27",
      "2022-12-12",
      "2023-02-08",
      "2022-07-30",
      "2022-08-20",
      "2022-11-18",
      "2022-10-15"
    ),
    start_time = c("12:00:00",
                   "15:00:00",
                   "16:00:00",
                   "11:00:00",
                   "11:00:00",
                   "12:00:00",
                   "12:00:00"),

    output_file = "../../../Documents/Gigwork-Stories/riders/data/Lyon/"
  )
}


# Loop over rider data and produce data output files
for (i in 1:nrow(riders)) {
  message(paste0("building for ", riders$rider_name[i]))
  # # generate route data for riders
  gen_rider_route(rider_gpx = riders$rider_gpx[rider_gpx = i]) %>%
    st_write(paste0(riders$output_file[i], riders$rider_name[i], ".geojson")) %>%
    write.csv(paste0(riders$output_file[i], riders$rider_name[i], ".csv"))
  message(paste0("building graph for ", riders$rider_name[i]))
  gen_rider_data(
    rider_gpx = riders$rider_gpx[i],
    work_day = riders$work_day[i],
    start_time = riders$start_time[i],
    meta = riders$meta[i],
    rider_name = riders$rider_name[i],
    mode = riders$mode[i]
  )
  message("Data crunched! Moving on to next rider")
}
