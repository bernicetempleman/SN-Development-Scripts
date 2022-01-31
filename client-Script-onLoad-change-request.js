function onLoad() {
    //Set callerid to logged in user
    if(!g_form.getValue('caller_id')) {
         g_form.setValue('caller_id', g_user.userID, g_user.userName);
     }
 }