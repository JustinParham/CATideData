import React from "react";
import Header from "../components/includes/Header"
import Footer from "../components/includes/Footer"
import SearchArea from "../components/includes/SearchArea"



export default function Home() {
    


    const californiaStationsList = [
        {stationNumber:9410170, Name:"San Diego Bay, CA"},
        {stationNumber:9410230, Name:"La Jolla, CA"},
        {stationNumber:9410660, Name:"Los Angeles, CA"},
        {stationNumber:9410840, Name:"Santa Monica, CA"},
        {stationNumber:9411340, Name: "Santa Barbara, CA"},
        {stationNumber:9411406, Name:"Oil Platform Harvest, CA"},
        {stationNumber:9412110, Name:"Port San Luis, CA"},
        {stationNumber:9413450, Name:"Monterey, CA"},
        {stationNumber:9414523, Name:"Redwood City, CA"},
        {stationNumber:9414750, Name:"Alameda, CA"},
        {stationNumber:9414290, Name:"San Francisco, CA"},
        {stationNumber:9414863, Name:"Richmond, CA"},
        {stationNumber:9415102, Name:"Martinez-Amorco Pier, CA"},
        {stationNumber:9415144, Name:"Port Chicago, CA"},
        {stationNumber:9415020, Name:"Point Reyes, CA"},
        {stationNumber:9416841, Name:"Arena Cove, CA"},
        {stationNumber:9418767, Name:"North Spit, CA"},
        {stationNumber:9419750, Name:"Crescent City, CA"}
    ]
    



    
    

    // Need Drop down to select US State or Territory
    // Need another drop down to select which station within that state or territory
    // Need another way to select date range for the info
    // need to display tide chart for the selected in a simple table format.

    return (
    <div className="wrapper">
        <div className="mainContent">
        <Header />
        <SearchArea stationList={californiaStationsList}/>
        </div>
        <Footer />
    </div>
    )





}
