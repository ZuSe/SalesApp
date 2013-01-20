/*
 * Sybase Mobile Workflow version 2.1.3
 * 
 * Workflow.js
 * This file will be regenerated, so changes made herein will be removed the
 * next time the workflow is regenerated. It is therefore strongly recommended
 * that the user not make changes in this file.
 * 
 * The template used to create this file was compiled on Fri May 18 13:00:28 CEST 2012
 *
 * Copyright (c) 2010, 2011 Sybase Inc. All rights reserved.
 */



function menuItemCallbackStartCustomerGetDetails() {
    if (!customBeforeMenuItemClick('Start', 'CustomerGetDetails')) {
        return;
    }
    var rmiKeys = [];
    var rmiKeyTypes = [];
    var rmiInputOnlyKeys = [];
    var rmiInputOnlyKeyTypes = [];
    rmiKeys[0] = 'Select_Customer';
    rmiKeyTypes[0] = 'TEXT';
    rmiInputOnlyKeys[0] = 'Select_Customer';
    rmiInputOnlyKeyTypes[0] = 'TEXT';
    var workflowMessageToSend = getMessageValueCollectionForOnlineRequest('Start', 'CustomerGetDetails', rmiKeys, rmiKeyTypes);
    var inputOnlyWorkflowMessageToSend = getMessageValueCollectionForOnlineRequest('Start', 'CustomerGetDetails', rmiInputOnlyKeys, rmiInputOnlyKeyTypes);
    if (validateScreen('Start', getCurrentMessageValueCollection(), rmiKeys) && 
        saveScreens(true)) {
        doOnlineRequest('Start', 'CustomerGetDetails', 60, 0, '', null, workflowMessageToSend, inputOnlyWorkflowMessageToSend.serializeToString());
    }
    customAfterMenuItemClick('Start', 'CustomerGetDetails');
}


function menuItemCallbackStartCancel() {
    if (!customBeforeMenuItemClick('Start', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('Start', 'Cancel');
}


function menuItemCallbackCust_DetailsSalesOrderGetList() {
    if (!customBeforeMenuItemClick('Cust_Details', 'SalesOrderGetList')) {
        return;
    }
    var rmiKeys = [];
    var rmiKeyTypes = [];
    var rmiInputOnlyKeys = [];
    var rmiInputOnlyKeyTypes = [];
    rmiKeys[0] = 'CustomerGetDetails_Custo_No_attribKey';
    rmiKeyTypes[0] = 'TEXT';
    rmiKeys[1] = '_old.CustomerGetDetails.Custo_No';
    rmiKeyTypes[1] = 'TEXT';
    rmiInputOnlyKeys[0] = 'CustomerGetDetails_Custo_No_attribKey';
    rmiInputOnlyKeyTypes[0] = 'TEXT';
    rmiInputOnlyKeys[1] = '_old.CustomerGetDetails.Custo_No';
    rmiInputOnlyKeyTypes[1] = 'TEXT';
    var workflowMessageToSend = getMessageValueCollectionForOnlineRequest('Cust_Details', 'SalesOrderGetList', rmiKeys, rmiKeyTypes);
    var inputOnlyWorkflowMessageToSend = getMessageValueCollectionForOnlineRequest('Cust_Details', 'SalesOrderGetList', rmiInputOnlyKeys, rmiInputOnlyKeyTypes);
    if (validateScreen('Cust_Details', getCurrentMessageValueCollection(), rmiKeys) && 
        saveScreens(true)) {
        doOnlineRequest('Cust_Details', 'SalesOrderGetList', 60, 0, '', null, workflowMessageToSend, inputOnlyWorkflowMessageToSend.serializeToString());
    }
    customAfterMenuItemClick('Cust_Details', 'SalesOrderGetList');
}


function menuItemCallbackCust_DetailsCreate_Sales_Order() {
    if (!customBeforeMenuItemClick('Cust_Details', 'Create_Sales_Order')) {
        return;
    }
    navigateForward('SalesOrderCreate');
    customAfterMenuItemClick('Cust_Details', 'Create_Sales_Order');
}


function menuItemCallbackCust_DetailsBack() {
    if (!customBeforeMenuItemClick('Cust_Details', 'Back')) {
        return;
    }
    doSaveAction();
    customAfterMenuItemClick('Cust_Details', 'Back');
}
function menuItemCallbackCust_DetailsCancel() {
    if (!customBeforeMenuItemClick('Cust_Details', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('Cust_Details', 'Cancel');
}


function menuItemCallbackOrder_DetailsBack() {
    if (!customBeforeMenuItemClick('Order_Details', 'Back')) {
        return;
    }
    doSaveAction();
    customAfterMenuItemClick('Order_Details', 'Back');
}


function menuItemCallbackOrder_DetailsView_Order_Status() {
    if (!customBeforeMenuItemClick('Order_Details', 'View_Order_Status')) {
        return;
    }
    var rmiKeys = [];
    var rmiKeyTypes = [];
    var rmiInputOnlyKeys = [];
    var rmiInputOnlyKeyTypes = [];
    rmiKeys[0] = 'SalesOrderGetList_SD_DOC_attribKey';
    rmiKeyTypes[0] = 'TEXT';
    rmiKeys[1] = '_old.SalesOrderGetList.SD_DOC';
    rmiKeyTypes[1] = 'TEXT';
    rmiInputOnlyKeys[0] = 'SalesOrderGetList_SD_DOC_attribKey';
    rmiInputOnlyKeyTypes[0] = 'TEXT';
    rmiInputOnlyKeys[1] = '_old.SalesOrderGetList.SD_DOC';
    rmiInputOnlyKeyTypes[1] = 'TEXT';
    var workflowMessageToSend = getMessageValueCollectionForOnlineRequest('Order_Details', 'View_Order_Status', rmiKeys, rmiKeyTypes);
    var inputOnlyWorkflowMessageToSend = getMessageValueCollectionForOnlineRequest('Order_Details', 'View_Order_Status', rmiInputOnlyKeys, rmiInputOnlyKeyTypes);
    if (validateScreen('Order_Details', getCurrentMessageValueCollection(), rmiKeys) && 
        saveScreens(true)) {
        doOnlineRequest('Order_Details', 'View_Order_Status', 60, 0, '', null, workflowMessageToSend, inputOnlyWorkflowMessageToSend.serializeToString());
    }
    customAfterMenuItemClick('Order_Details', 'View_Order_Status');
}
function menuItemCallbackOrder_DetailsCancel() {
    if (!customBeforeMenuItemClick('Order_Details', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('Order_Details', 'Cancel');
}


function menuItemCallbackSalesOrdersCancel() {
    if (!customBeforeMenuItemClick('SalesOrders', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('SalesOrders', 'Cancel');
}


function menuItemCallbackOrder_StatusBack() {
    if (!customBeforeMenuItemClick('Order_Status', 'Back')) {
        return;
    }
    doSaveAction();
    customAfterMenuItemClick('Order_Status', 'Back');
}
function menuItemCallbackOrder_StatusCancel() {
    if (!customBeforeMenuItemClick('Order_Status', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('Order_Status', 'Cancel');
}


function menuItemCallbackSalesOrderCreateCreate() {
    if (!customBeforeMenuItemClick('SalesOrderCreate', 'Create')) {
        return;
    }
    var rmiKeys = [];
    var rmiKeyTypes = [];
    var rmiInputOnlyKeys = [];
    var rmiInputOnlyKeyTypes = [];
    rmiKeys[0] = 'Sales_Type';
    rmiKeyTypes[0] = 'TEXT';
    rmiKeys[1] = 'Sales_Organization';
    rmiKeyTypes[1] = 'TEXT';
    rmiKeys[2] = 'Distribution_Channel';
    rmiKeyTypes[2] = 'TEXT';
    rmiKeys[3] = 'Sales_Division';
    rmiKeyTypes[3] = 'TEXT';
    rmiKeys[4] = 'Sales_Group';
    rmiKeyTypes[4] = 'TEXT';
    rmiKeys[5] = 'Sales_Office';
    rmiKeyTypes[5] = 'TEXT';
    rmiKeys[6] = 'Req_Date';
    rmiKeyTypes[6] = 'TEXT';
    rmiKeys[7] = 'Purchase_Date';
    rmiKeyTypes[7] = 'DATETIME';
    rmiKeys[8] = 'ErrorLogs';
    rmiKeyTypes[8] = 'LIST';
    rmiKeys[9] = 'CustomerGetDetails_Custo_No_attribKey';
    rmiKeyTypes[9] = 'TEXT';
    rmiKeys[10] = '_old.CustomerGetDetails.Custo_No';
    rmiKeyTypes[10] = 'TEXT';
    rmiKeys[11] = 'CustomerGetDetails_FORM_OF_AD_attribKey';
    rmiKeyTypes[11] = 'TEXT';
    rmiKeys[12] = '_old.CustomerGetDetails.FORM_OF_AD';
    rmiKeyTypes[12] = 'TEXT';
    rmiKeys[13] = 'CustomerGetDetails_FIRST_NAME_attribKey';
    rmiKeyTypes[13] = 'TEXT';
    rmiKeys[14] = '_old.CustomerGetDetails.FIRST_NAME';
    rmiKeyTypes[14] = 'TEXT';
    rmiKeys[15] = 'CustomerGetDetails_NAME_attribKey';
    rmiKeyTypes[15] = 'TEXT';
    rmiKeys[16] = '_old.CustomerGetDetails.NAME';
    rmiKeyTypes[16] = 'TEXT';
    rmiKeys[17] = 'CustomerGetDetails_NAME_3_attribKey';
    rmiKeyTypes[17] = 'TEXT';
    rmiKeys[18] = '_old.CustomerGetDetails.NAME_3';
    rmiKeyTypes[18] = 'TEXT';
    rmiKeys[19] = 'CustomerGetDetails_NAME_4_attribKey';
    rmiKeyTypes[19] = 'TEXT';
    rmiKeys[20] = '_old.CustomerGetDetails.NAME_4';
    rmiKeyTypes[20] = 'TEXT';
    rmiKeys[21] = 'CustomerGetDetails_STREET_attribKey';
    rmiKeyTypes[21] = 'TEXT';
    rmiKeys[22] = '_old.CustomerGetDetails.STREET';
    rmiKeyTypes[22] = 'TEXT';
    rmiKeys[23] = 'CustomerGetDetails_POSTL_CODE_attribKey';
    rmiKeyTypes[23] = 'TEXT';
    rmiKeys[24] = '_old.CustomerGetDetails.POSTL_CODE';
    rmiKeyTypes[24] = 'TEXT';
    rmiKeys[25] = 'CustomerGetDetails_CITY_attribKey';
    rmiKeyTypes[25] = 'TEXT';
    rmiKeys[26] = '_old.CustomerGetDetails.CITY';
    rmiKeyTypes[26] = 'TEXT';
    rmiKeys[27] = 'CustomerGetDetails_REGION_attribKey';
    rmiKeyTypes[27] = 'TEXT';
    rmiKeys[28] = '_old.CustomerGetDetails.REGION';
    rmiKeyTypes[28] = 'TEXT';
    rmiKeys[29] = 'CustomerGetDetails_COUNTRY_attribKey';
    rmiKeyTypes[29] = 'TEXT';
    rmiKeys[30] = '_old.CustomerGetDetails.COUNTRY';
    rmiKeyTypes[30] = 'TEXT';
    rmiKeys[31] = 'CustomerGetDetails_COUNTRNISO_attribKey';
    rmiKeyTypes[31] = 'TEXT';
    rmiKeys[32] = '_old.CustomerGetDetails.COUNTRNISO';
    rmiKeyTypes[32] = 'TEXT';
    rmiKeys[33] = 'CustomerGetDetails_COUNTRAISO_attribKey';
    rmiKeyTypes[33] = 'TEXT';
    rmiKeys[34] = '_old.CustomerGetDetails.COUNTRAISO';
    rmiKeyTypes[34] = 'TEXT';
    rmiKeys[35] = 'CustomerGetDetails_INTERNET_attribKey';
    rmiKeyTypes[35] = 'TEXT';
    rmiKeys[36] = '_old.CustomerGetDetails.INTERNET';
    rmiKeyTypes[36] = 'TEXT';
    rmiKeys[37] = 'CustomerGetDetails_FAX_NUMBER_attribKey';
    rmiKeyTypes[37] = 'TEXT';
    rmiKeys[38] = '_old.CustomerGetDetails.FAX_NUMBER';
    rmiKeyTypes[38] = 'TEXT';
    rmiKeys[39] = 'CustomerGetDetails_TELEPHONE_attribKey';
    rmiKeyTypes[39] = 'TEXT';
    rmiKeys[40] = '_old.CustomerGetDetails.TELEPHONE';
    rmiKeyTypes[40] = 'TEXT';
    rmiKeys[41] = 'CustomerGetDetails_TELEPHONE2_attribKey';
    rmiKeyTypes[41] = 'TEXT';
    rmiKeys[42] = '_old.CustomerGetDetails.TELEPHONE2';
    rmiKeyTypes[42] = 'TEXT';
    rmiKeys[43] = 'CustomerGetDetails_LANGU_attribKey';
    rmiKeyTypes[43] = 'TEXT';
    rmiKeys[44] = '_old.CustomerGetDetails.LANGU';
    rmiKeyTypes[44] = 'TEXT';
    rmiKeys[45] = 'CustomerGetDetails_LANGU_ISO_attribKey';
    rmiKeyTypes[45] = 'TEXT';
    rmiKeys[46] = '_old.CustomerGetDetails.LANGU_ISO';
    rmiKeyTypes[46] = 'TEXT';
    rmiKeys[47] = 'CustomerGetDetails_CURRENCY_attribKey';
    rmiKeyTypes[47] = 'TEXT';
    rmiKeys[48] = '_old.CustomerGetDetails.CURRENCY';
    rmiKeyTypes[48] = 'TEXT';
    rmiKeys[49] = 'CustomerGetDetails_CURRENCY_ISO_attribKey';
    rmiKeyTypes[49] = 'TEXT';
    rmiKeys[50] = '_old.CustomerGetDetails.CURRENCY_ISO';
    rmiKeyTypes[50] = 'TEXT';
    rmiKeys[51] = 'CustomerGetDetails_COUNTRYISO_attribKey';
    rmiKeyTypes[51] = 'TEXT';
    rmiKeys[52] = '_old.CustomerGetDetails.COUNTRYISO';
    rmiKeyTypes[52] = 'TEXT';
    rmiKeys[53] = 'CustomerGetDetails_ONLY_CHANGE_COMADDRESS_attribKey';
    rmiKeyTypes[53] = 'TEXT';
    rmiKeys[54] = '_old.CustomerGetDetails.ONLY_CHANGE_COMADDRESS';
    rmiKeyTypes[54] = 'TEXT';
    rmiInputOnlyKeys[0] = 'Sales_Type';
    rmiInputOnlyKeyTypes[0] = 'TEXT';
    rmiInputOnlyKeys[1] = 'Sales_Organization';
    rmiInputOnlyKeyTypes[1] = 'TEXT';
    rmiInputOnlyKeys[2] = 'Distribution_Channel';
    rmiInputOnlyKeyTypes[2] = 'TEXT';
    rmiInputOnlyKeys[3] = 'Sales_Division';
    rmiInputOnlyKeyTypes[3] = 'TEXT';
    rmiInputOnlyKeys[4] = 'Sales_Group';
    rmiInputOnlyKeyTypes[4] = 'TEXT';
    rmiInputOnlyKeys[5] = 'Sales_Office';
    rmiInputOnlyKeyTypes[5] = 'TEXT';
    rmiInputOnlyKeys[6] = 'Req_Date';
    rmiInputOnlyKeyTypes[6] = 'TEXT';
    rmiInputOnlyKeys[7] = 'Purchase_Date';
    rmiInputOnlyKeyTypes[7] = 'DATETIME';
    rmiInputOnlyKeys[8] = 'ErrorLogs';
    rmiInputOnlyKeyTypes[8] = 'LIST';
    rmiInputOnlyKeys[9] = 'CustomerGetDetails_Custo_No_attribKey';
    rmiInputOnlyKeyTypes[9] = 'TEXT';
    rmiInputOnlyKeys[10] = '_old.CustomerGetDetails.Custo_No';
    rmiInputOnlyKeyTypes[10] = 'TEXT';
    rmiInputOnlyKeys[11] = 'CustomerGetDetails_FORM_OF_AD_attribKey';
    rmiInputOnlyKeyTypes[11] = 'TEXT';
    rmiInputOnlyKeys[12] = '_old.CustomerGetDetails.FORM_OF_AD';
    rmiInputOnlyKeyTypes[12] = 'TEXT';
    rmiInputOnlyKeys[13] = 'CustomerGetDetails_FIRST_NAME_attribKey';
    rmiInputOnlyKeyTypes[13] = 'TEXT';
    rmiInputOnlyKeys[14] = '_old.CustomerGetDetails.FIRST_NAME';
    rmiInputOnlyKeyTypes[14] = 'TEXT';
    rmiInputOnlyKeys[15] = 'CustomerGetDetails_NAME_attribKey';
    rmiInputOnlyKeyTypes[15] = 'TEXT';
    rmiInputOnlyKeys[16] = '_old.CustomerGetDetails.NAME';
    rmiInputOnlyKeyTypes[16] = 'TEXT';
    rmiInputOnlyKeys[17] = 'CustomerGetDetails_NAME_3_attribKey';
    rmiInputOnlyKeyTypes[17] = 'TEXT';
    rmiInputOnlyKeys[18] = '_old.CustomerGetDetails.NAME_3';
    rmiInputOnlyKeyTypes[18] = 'TEXT';
    rmiInputOnlyKeys[19] = 'CustomerGetDetails_NAME_4_attribKey';
    rmiInputOnlyKeyTypes[19] = 'TEXT';
    rmiInputOnlyKeys[20] = '_old.CustomerGetDetails.NAME_4';
    rmiInputOnlyKeyTypes[20] = 'TEXT';
    rmiInputOnlyKeys[21] = 'CustomerGetDetails_STREET_attribKey';
    rmiInputOnlyKeyTypes[21] = 'TEXT';
    rmiInputOnlyKeys[22] = '_old.CustomerGetDetails.STREET';
    rmiInputOnlyKeyTypes[22] = 'TEXT';
    rmiInputOnlyKeys[23] = 'CustomerGetDetails_POSTL_CODE_attribKey';
    rmiInputOnlyKeyTypes[23] = 'TEXT';
    rmiInputOnlyKeys[24] = '_old.CustomerGetDetails.POSTL_CODE';
    rmiInputOnlyKeyTypes[24] = 'TEXT';
    rmiInputOnlyKeys[25] = 'CustomerGetDetails_CITY_attribKey';
    rmiInputOnlyKeyTypes[25] = 'TEXT';
    rmiInputOnlyKeys[26] = '_old.CustomerGetDetails.CITY';
    rmiInputOnlyKeyTypes[26] = 'TEXT';
    rmiInputOnlyKeys[27] = 'CustomerGetDetails_REGION_attribKey';
    rmiInputOnlyKeyTypes[27] = 'TEXT';
    rmiInputOnlyKeys[28] = '_old.CustomerGetDetails.REGION';
    rmiInputOnlyKeyTypes[28] = 'TEXT';
    rmiInputOnlyKeys[29] = 'CustomerGetDetails_COUNTRY_attribKey';
    rmiInputOnlyKeyTypes[29] = 'TEXT';
    rmiInputOnlyKeys[30] = '_old.CustomerGetDetails.COUNTRY';
    rmiInputOnlyKeyTypes[30] = 'TEXT';
    rmiInputOnlyKeys[31] = 'CustomerGetDetails_COUNTRNISO_attribKey';
    rmiInputOnlyKeyTypes[31] = 'TEXT';
    rmiInputOnlyKeys[32] = '_old.CustomerGetDetails.COUNTRNISO';
    rmiInputOnlyKeyTypes[32] = 'TEXT';
    rmiInputOnlyKeys[33] = 'CustomerGetDetails_COUNTRAISO_attribKey';
    rmiInputOnlyKeyTypes[33] = 'TEXT';
    rmiInputOnlyKeys[34] = '_old.CustomerGetDetails.COUNTRAISO';
    rmiInputOnlyKeyTypes[34] = 'TEXT';
    rmiInputOnlyKeys[35] = 'CustomerGetDetails_INTERNET_attribKey';
    rmiInputOnlyKeyTypes[35] = 'TEXT';
    rmiInputOnlyKeys[36] = '_old.CustomerGetDetails.INTERNET';
    rmiInputOnlyKeyTypes[36] = 'TEXT';
    rmiInputOnlyKeys[37] = 'CustomerGetDetails_FAX_NUMBER_attribKey';
    rmiInputOnlyKeyTypes[37] = 'TEXT';
    rmiInputOnlyKeys[38] = '_old.CustomerGetDetails.FAX_NUMBER';
    rmiInputOnlyKeyTypes[38] = 'TEXT';
    rmiInputOnlyKeys[39] = 'CustomerGetDetails_TELEPHONE_attribKey';
    rmiInputOnlyKeyTypes[39] = 'TEXT';
    rmiInputOnlyKeys[40] = '_old.CustomerGetDetails.TELEPHONE';
    rmiInputOnlyKeyTypes[40] = 'TEXT';
    rmiInputOnlyKeys[41] = 'CustomerGetDetails_TELEPHONE2_attribKey';
    rmiInputOnlyKeyTypes[41] = 'TEXT';
    rmiInputOnlyKeys[42] = '_old.CustomerGetDetails.TELEPHONE2';
    rmiInputOnlyKeyTypes[42] = 'TEXT';
    rmiInputOnlyKeys[43] = 'CustomerGetDetails_LANGU_attribKey';
    rmiInputOnlyKeyTypes[43] = 'TEXT';
    rmiInputOnlyKeys[44] = '_old.CustomerGetDetails.LANGU';
    rmiInputOnlyKeyTypes[44] = 'TEXT';
    rmiInputOnlyKeys[45] = 'CustomerGetDetails_LANGU_ISO_attribKey';
    rmiInputOnlyKeyTypes[45] = 'TEXT';
    rmiInputOnlyKeys[46] = '_old.CustomerGetDetails.LANGU_ISO';
    rmiInputOnlyKeyTypes[46] = 'TEXT';
    rmiInputOnlyKeys[47] = 'CustomerGetDetails_CURRENCY_attribKey';
    rmiInputOnlyKeyTypes[47] = 'TEXT';
    rmiInputOnlyKeys[48] = '_old.CustomerGetDetails.CURRENCY';
    rmiInputOnlyKeyTypes[48] = 'TEXT';
    rmiInputOnlyKeys[49] = 'CustomerGetDetails_CURRENCY_ISO_attribKey';
    rmiInputOnlyKeyTypes[49] = 'TEXT';
    rmiInputOnlyKeys[50] = '_old.CustomerGetDetails.CURRENCY_ISO';
    rmiInputOnlyKeyTypes[50] = 'TEXT';
    rmiInputOnlyKeys[51] = 'CustomerGetDetails_COUNTRYISO_attribKey';
    rmiInputOnlyKeyTypes[51] = 'TEXT';
    rmiInputOnlyKeys[52] = '_old.CustomerGetDetails.COUNTRYISO';
    rmiInputOnlyKeyTypes[52] = 'TEXT';
    rmiInputOnlyKeys[53] = 'CustomerGetDetails_ONLY_CHANGE_COMADDRESS_attribKey';
    rmiInputOnlyKeyTypes[53] = 'TEXT';
    rmiInputOnlyKeys[54] = '_old.CustomerGetDetails.ONLY_CHANGE_COMADDRESS';
    rmiInputOnlyKeyTypes[54] = 'TEXT';
    var workflowMessageToSend = getMessageValueCollectionForOnlineRequest('SalesOrderCreate', 'Create', rmiKeys, rmiKeyTypes);
    var inputOnlyWorkflowMessageToSend = getMessageValueCollectionForOnlineRequest('SalesOrderCreate', 'Create', rmiInputOnlyKeys, rmiInputOnlyKeyTypes);
    if (validateScreen('SalesOrderCreate', getCurrentMessageValueCollection(), rmiKeys) && 
        saveScreens(true)) {
        doOnlineRequest('SalesOrderCreate', 'Create', 60, 0, '', null, workflowMessageToSend, inputOnlyWorkflowMessageToSend.serializeToString());
    }
    customAfterMenuItemClick('SalesOrderCreate', 'Create');
}
function menuItemCallbackSalesOrderCreateCancel() {
    if (!customBeforeMenuItemClick('SalesOrderCreate', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('SalesOrderCreate', 'Cancel');
}

function doAddRowAction() {
    var mvc = getCurrentMessageValueCollection();
    var listview = getListviewMessageValue();
    if (listview) {
        var childMVC = new MessageValueCollection();
        var key = guid();
        childMVC.setKey(key);
        childMVC.setState("new");
        childMVC.setParent(listview.getKey());
        childMVC.setParentValue(listview);
        listview.getValue().push(childMVC);
        console.log(workflowMessage.serializeToString());
        if (validateScreen(getCurrentScreen(), mvc)) {
            listViewValuesKey.pop();
            listViewValuesKey.push(childMVC.getKey());
            doListviewAddRowAction();
            console.log(workflowMessage.serializeToString());
        }
    }
}

function doCreateKeyCollectionAction(addScreen) {
    var mvc = getCurrentMessageValueCollection();
    var relationKey = getListViewKey(getCurrentScreen());
    var mv = mvc.getData(relationKey);
    var childMVC = new MessageValueCollection();
    var key = guid();
    childMVC.setKey(key);
    childMVC.setState("new");
    childMVC.setParent(mv.getKey());
    childMVC.setParentValue(mv);
    mv.getValue().push(childMVC);
    setDefaultValues(addScreen);
    // collect default values from the addScreen
    updateMessageValueCollectionFromUI(childMVC, addScreen);
    navigateForward(addScreen, key);
}

function doListviewAddRowAction(listKey) {
    var mvc = getCurrentMessageValueCollection(listKey);
    if (mvc.getState() === "new") {
        // this action is triggered after AddRow action
        if (validateScreen(getCurrentScreen(), mvc)) {
            mvc.setState("add");
            doSaveAction(false);
        }
    }
}

function doListviewUpdateRowAction(listKey) {
    var mvc = getCurrentMessageValueCollection(listKey);
    if (validateScreen(getCurrentScreen(), mvc)) {
        if (mvc.getState() !== "add") {
            mvc.setState("update");            
        }
        doSaveAction(false);
    }
}

function doListviewDeleteRowAction(listKey) {
    var mvc = getCurrentMessageValueCollection(listKey);
    if (validateScreen(getCurrentScreen(), mvc)) {
        if (mvc.getState() !== "add") {
            mvc.setState("delete");            
            doSaveAction(false);
        }
        else {
            var valuesArray = mvc.getParentValue().getValue();
            for (var i = 0; i < valuesArray.length; i++) {
                if (valuesArray[i] == mvc) {
                    valuesArray.splice(i, 1);
                }
            }
            navigateBack(true);
            updateUIFromMessageValueCollection(getCurrentScreen(), getCurrentMessageValueCollection());
        }        
    }
}

function doSaveActionWithoutReturn() {
   doSaveAction();
   return;
}

function doSaveAction(needValidation) {
    if (!getPreviousScreen()) {
        if(saveScreen(getCurrentMessageValueCollection(), getCurrentScreen(), needValidation)) {
            doSubmitWorkflow(getCurrentScreen(), "Save", '', '');
            return false;
        }
        return true;
    }
    if(saveScreen(getCurrentMessageValueCollection(), getCurrentScreen(), needValidation)) {
        navigateBack(false, false);
        updateUIFromMessageValueCollection(getCurrentScreen(), getCurrentMessageValueCollection());
        return true;
    }
    return false;
}

function doCancelAction() {
    if (!getPreviousScreen()) {
        closeWorkflow();
        return;
    }
    
    var mvc = getCurrentMessageValueCollection();
    navigateBack(true);
    var mvc1 = getCurrentMessageValueCollection();
    
    //if we are moving onto a listview screen we should delete any newly added rows
    if (mvc != mvc1) {
        //find the items of the listview and if any of them are marked as new, delete them.
        var messValues = mvc1.getValues();
        for (var i = 0; i < messValues.length; i++) {
            if (messValues[i].getType() === "LIST") {
                var listViewValuesArray = messValues[i].getValue()
                for (var j = 0; j < listViewValuesArray.length; j++) {
                    if (listViewValuesArray[j].getState() === "new") {
                        listViewValuesArray.splice(j, 1);
                        j--;
                    }
                }
            }        
        }
        updateUIFromMessageValueCollection(getCurrentScreen(), getCurrentMessageValueCollection());
    }
    else if (mvc.getState() === "update") {
        mvc.setState("");
    }
}

function customNavigationEntry() {
    this.condition;
    this.screen;
}
function customNavigationEntry( a_condition, a_screen ) {
    this.condition = a_condition;
    this.screen = a_screen;
}

/**
 * For the specific pair - screen named 'currentScreenKey' and the action 'actionName', return
 * the list of custom navigation condition-names and their destination screens.
 */
function getCustomNavigations( currentScreenKey, actionName )  {
    var customNavigations = new Array();
    return customNavigations;
}
