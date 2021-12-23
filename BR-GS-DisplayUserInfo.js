//Table: incident
// Advanced
//When: After Update
//no filter condition
//no actions
//script
//no condition
(function executeRule(current, previous /*null when async*/) {
    gs.addInfoMessage("This is a demo");
        gs.addInfoMessage("getUserID" + gs.getUserID());
        gs.addInfoMessage("get User "+ gs.getUser());
        gs.addInfoMessage("getUserDisplayName " + gs.getUserDisplayName());
        gs.addInfoMessage("getUserName" + gs.getUserName());
    
    })(current, previous);