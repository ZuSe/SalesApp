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



function menuItemCallbackStartCustGetDetail() {
    if (!customBeforeMenuItemClick('Start', 'CustGetDetail')) {
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
    var workflowMessageToSend = getMessageValueCollectionForOnlineRequest('Start', 'CustGetDetail', rmiKeys, rmiKeyTypes);
    var inputOnlyWorkflowMessageToSend = getMessageValueCollectionForOnlineRequest('Start', 'CustGetDetail', rmiInputOnlyKeys, rmiInputOnlyKeyTypes);
    if (validateScreen('Start', getCurrentMessageValueCollection(), rmiKeys) && 
        saveScreens(true)) {
        doOnlineRequest('Start', 'CustGetDetail', 60, 0, '', null, workflowMessageToSend, inputOnlyWorkflowMessageToSend.serializeToString());
    }
    customAfterMenuItemClick('Start', 'CustGetDetail');
}


function menuItemCallbackStartCancel() {
    if (!customBeforeMenuItemClick('Start', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('Start', 'Cancel');
}


function menuItemCallbackCust_DetailsGetOrderList() {
    if (!customBeforeMenuItemClick('Cust_Details', 'GetOrderList')) {
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
    var workflowMessageToSend = getMessageValueCollectionForOnlineRequest('Cust_Details', 'GetOrderList', rmiKeys, rmiKeyTypes);
    var inputOnlyWorkflowMessageToSend = getMessageValueCollectionForOnlineRequest('Cust_Details', 'GetOrderList', rmiInputOnlyKeys, rmiInputOnlyKeyTypes);
    if (validateScreen('Cust_Details', getCurrentMessageValueCollection(), rmiKeys) && 
        saveScreens(true)) {
        doOnlineRequest('Cust_Details', 'GetOrderList', 60, 0, '', null, workflowMessageToSend, inputOnlyWorkflowMessageToSend.serializeToString());
    }
    customAfterMenuItemClick('Cust_Details', 'GetOrderList');
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
function menuItemCallbackOrder_DetailsCancel() {
    if (!customBeforeMenuItemClick('Order_Details', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('Order_Details', 'Cancel');
}


function menuItemCallbackOrdersCancel() {
    if (!customBeforeMenuItemClick('Orders', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('Orders', 'Cancel');
}


function menuItemCallbackCustomerOnMapBack_Key() {
    if (!customBeforeMenuItemClick('CustomerOnMap', 'Back_Key')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('CustomerOnMap', 'Back_Key');
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
