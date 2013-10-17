/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.getElementById('sql-result').innerHTML = 'bindEvents started';
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        document.getElementById('sql-result').innerHTML = 'Create db Now';
        app.createDB();        
    },
    // Update DOM on a Received Event
    createDB: function(id) {
        if (!db) {
            db = window.openDatabase("ImageAD", "1.0", "PhoneGap Training", 800000);
        }

        document.getElementById('sql-result').innerHTML = 'Db creation proccess started';
        db.transaction(this.populateDB, this.errorCB, this.successCB);
    },
    // Populate Database
    populateDB: function(tx) {
    document.getElementById('sql-result').innerHTML = 'Db creation proccess started';
    tx.executeSql('DROP TABLE IF EXISTS DEMO');


    //Create table region
    tx.executeSql('DROP TABLE IF EXISTS regions');
    tx.executeSql('CREATE TABLE IF NOT EXISTS regions (id unique, name)');
    document.getElementById('sql-result').innerHTML = "Region Success has been notified";  


    //Create table district
    tx.executeSql('DROP TABLE IF EXISTS districts');
    tx.executeSql('CREATE TABLE IF NOT EXISTS districts (id unique, name, region_id)');
    document.getElementById('sql-result').innerHTML = "Districts  Success has been notified";  

  /* // Get Region List
    $.ajax({
        url: "http://agromis.mfarms.org/en/regions/getallregionsbycountry/1",
        dataType:"json",
        success:function (region_json) {
            
            //Add region into db
            $.each(region_json, function(i,item){

                db.transaction(function(tx){
                    tx.executeSql('INSERT OR REPLACE INTO regions (id, name) VALUES ("'+item.id+'", "'+item.name+'")');
                },function(tx,error){
                    console.log(JSON.stringify(tx.message));
                    console.log(JSON.stringify(error));
                },function(){
                    document.getElementById('sql-result').innerHTML = "Region "+ i + " Success has been notified";  
                    });


       });
            
            
        },
        error: function(model, response) {
            document.getElementById('sql-result').innerHTML = response.responseText;
        }
    });

    

    
    
    //  Get District
    $.ajax({
        url: "http://agromis.mfarms.org/en/districts/GetDistrictByCountry/1",
        dataType:"json",
        success:function (district_json) {
            
            //Add District into db
            $.each(district_json, function(i,item){

                db.transaction(function(tx){
                     tx.executeSql('INSERT OR REPLACE INTO districts (id, name, region_id) VALUES ("'+item.id+'", "'+item.name+'", "'+item.region_id+'")');
                },function(tx,error){
                    console.log(JSON.stringify(tx.message));
                    console.log(JSON.stringify(error));
                },function(){
                    document.getElementById('sql-result').innerHTML = "District "+ i + " Success has been notified";    
                    });


       });
            
            
        },
        error: function(model, response) {
            document.getElementById('sql-result').innerHTML = response.responseText;
        }
    });
    */


    },
    // Transaction error callback
    errorCB: function(tx, err) {
      alert("Error processing SQL: "+err);
    },
    // Transaction success callback
    successCB: function() {
        alert("success!");
    },
};
