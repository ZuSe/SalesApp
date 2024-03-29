/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.1.3.358
 * mbs - false 
 */
package GBI_SalesApp;

public  class PersonalizationParameters extends com.sybase.sup.client.persistence.AbstractPersonalizationParameters implements com.sybase.reflection.ClassWithMetaData
{
    private static GBI_SalesApp.intrnl.PersonalizationParametersMetaData META_DATA = new GBI_SalesApp.intrnl.PersonalizationParametersMetaData();
    
    /**
     * Return MetaData instance.  
     */
    public com.sybase.reflection.ClassMetaData getClassMetaData()
    {
        return META_DATA;
    }
    
    /**
     * Return MetaData instance.  
     */
    public static com.sybase.reflection.ClassMetaData getMetaData()
    {
        return META_DATA;
    }
    protected static com.sybase.sup.client.persistence.ClassDelegate DELEGATE = 
        new com.sybase.sup.client.persistence.ClassDelegate("PersonalizationParameters", GBI_SalesApp.PersonalizationParameters.class, META_DATA, GBI_SalesApp.GBI_SalesAppDB.getDelegate());
    
    /**
     * Creates an instance of GBI_SalesApp.PersonalizationParameters  
     */
    public PersonalizationParameters()
    {
        this.setClassDelegate(DELEGATE);
        _init();
    }
    protected void _init()
    {
        
        clientPersonalizationTableName = "co_gbi_salesapp_1_0_clientpersonalization";
        load();
    }
    
    private java.lang.String __PK_GetDetail  = com.sybase.afx.json.JsonValue.getString("0000012000");  
    
    private boolean __PK_GetDetailUserDefined  = com.sybase.afx.json.JsonValue.getBoolean("false");  
    
    private java.lang.String __PK_GetList  = com.sybase.afx.json.JsonValue.getString("0000012000");  
    
    private boolean __PK_GetListUserDefined  = com.sybase.afx.json.JsonValue.getBoolean("false");  
    
    private java.lang.String __PK_GetStatus  = com.sybase.afx.json.JsonValue.getString("0000000001");  
    
    private boolean __PK_GetStatusUserDefined  = com.sybase.afx.json.JsonValue.getBoolean("false");  
    
    private java.lang.String __username ;  
    
    private boolean __usernameUserDefined  = com.sybase.afx.json.JsonValue.getBoolean("false");  
    
    private java.lang.String __password ;  
    
    private boolean __passwordUserDefined  = com.sybase.afx.json.JsonValue.getBoolean("false");  
    
    public java.lang.String getAttributeString(int id)
    {
        switch(id)
        {
        case 551:
            return getPK_GetDetail();
        case 553:
            return getPK_GetList();
        case 555:
            return getPK_GetStatus();
        case 557:
            return getUsername();
        case 559:
            return getPassword();
        default:
            return super.getAttributeString(id);
        }
    }
    
    public void setAttributeString(int id, java.lang.String v)
    {
        switch(id)
        {
        case 551:
            setPK_GetDetail((java.lang.String)v);
            break;
        case 553:
            setPK_GetList((java.lang.String)v);
            break;
        case 555:
            setPK_GetStatus((java.lang.String)v);
            break;
        case 557:
            setUsername((java.lang.String)v);
            break;
        case 559:
            setPassword((java.lang.String)v);
            break;
        default:
            super.setAttributeString(id, v);
            break;
        }
    }
    public boolean getAttributeBoolean(int id)
    {
        switch(id)
        {
        case 552:
            return getPK_GetDetailUserDefined();
        case 554:
            return getPK_GetListUserDefined();
        case 556:
            return getPK_GetStatusUserDefined();
        case 558:
            return getUsernameUserDefined();
        case 560:
            return getPasswordUserDefined();
        default:
            return super.getAttributeBoolean(id);
        }
    }
    
    public void setAttributeBoolean(int id, boolean v)
    {
        switch(id)
        {
        case 552:
            setPK_GetDetailUserDefined((boolean)v);
            break;
        case 554:
            setPK_GetListUserDefined((boolean)v);
            break;
        case 556:
            setPK_GetStatusUserDefined((boolean)v);
            break;
        case 558:
            setUsernameUserDefined((boolean)v);
            break;
        case 560:
            setPasswordUserDefined((boolean)v);
            break;
        default:
            super.setAttributeBoolean(id, v);
            break;
        }
    }
    
    public Object getAttributeJson(int id)
    {
        switch(id)
        {
        default:
            return super.getAttributeJson(id);
        }
    }
    
    public void setAttributeJson(int id, Object value)
    {
        switch(id)
        {
        default:
            super.setAttributeJson(id, value);
            break;
        }
    }
    
    /**
     * get the value of PK_GetDetail  
     */
    public java.lang.String getPK_GetDetail()
    {
        
        return __PK_GetDetail;
    }
    
    /**
     * Set the value of PK_GetDetail  
     */
    public void setPK_GetDetail(java.lang.String value)
    {
        __PK_GetDetail = value;
        if ( __PK_GetDetailUserDefined == false )
        {
            __PK_GetDetailUserDefined = true;
        }
    }
    
    /**
     * get the value of PK_GetDetailUserDefined  
     */
    public boolean getPK_GetDetailUserDefined()
    {
        
        return __PK_GetDetailUserDefined;
    }
    
    /**
     * Set the value of PK_GetDetailUserDefined  
     */
    private void setPK_GetDetailUserDefined(boolean value)
    {
        __PK_GetDetailUserDefined = value;
    }
    
    /**
     * get the value of PK_GetList  
     */
    public java.lang.String getPK_GetList()
    {
        
        return __PK_GetList;
    }
    
    /**
     * Set the value of PK_GetList  
     */
    public void setPK_GetList(java.lang.String value)
    {
        __PK_GetList = value;
        if ( __PK_GetListUserDefined == false )
        {
            __PK_GetListUserDefined = true;
        }
    }
    
    /**
     * get the value of PK_GetListUserDefined  
     */
    public boolean getPK_GetListUserDefined()
    {
        
        return __PK_GetListUserDefined;
    }
    
    /**
     * Set the value of PK_GetListUserDefined  
     */
    private void setPK_GetListUserDefined(boolean value)
    {
        __PK_GetListUserDefined = value;
    }
    
    /**
     * get the value of PK_GetStatus  
     */
    public java.lang.String getPK_GetStatus()
    {
        
        return __PK_GetStatus;
    }
    
    /**
     * Set the value of PK_GetStatus  
     */
    public void setPK_GetStatus(java.lang.String value)
    {
        __PK_GetStatus = value;
        if ( __PK_GetStatusUserDefined == false )
        {
            __PK_GetStatusUserDefined = true;
        }
    }
    
    /**
     * get the value of PK_GetStatusUserDefined  
     */
    public boolean getPK_GetStatusUserDefined()
    {
        
        return __PK_GetStatusUserDefined;
    }
    
    /**
     * Set the value of PK_GetStatusUserDefined  
     */
    private void setPK_GetStatusUserDefined(boolean value)
    {
        __PK_GetStatusUserDefined = value;
    }
    
    /**
     * get the value of username  
     */
    public java.lang.String getUsername()
    {
        
        return __username;
    }
    
    /**
     * Set the value of username  
     */
    public void setUsername(java.lang.String value)
    {
        __username = value;
        if ( __usernameUserDefined == false )
        {
            __usernameUserDefined = true;
        }
    }
    
    /**
     * get the value of usernameUserDefined  
     */
    public boolean getUsernameUserDefined()
    {
        
        return __usernameUserDefined;
    }
    
    /**
     * Set the value of usernameUserDefined  
     */
    private void setUsernameUserDefined(boolean value)
    {
        __usernameUserDefined = value;
    }
    
    /**
     * get the value of password  
     */
    public java.lang.String getPassword()
    {
        
        return __password;
    }
    
    /**
     * Set the value of password  
     */
    public void setPassword(java.lang.String value)
    {
        __password = value;
        if ( __passwordUserDefined == false )
        {
            __passwordUserDefined = true;
        }
    }
    
    /**
     * get the value of passwordUserDefined  
     */
    public boolean getPasswordUserDefined()
    {
        
        return __passwordUserDefined;
    }
    
    /**
     * Set the value of passwordUserDefined  
     */
    private void setPasswordUserDefined(boolean value)
    {
        __passwordUserDefined = value;
    }
    
    
    
    protected void reset()
    {
        super.reset();
    	__PK_GetDetail  = com.sybase.afx.json.JsonValue.getString("0000012000");	
    
    	__PK_GetList  = com.sybase.afx.json.JsonValue.getString("0000012000");	
    
    	__PK_GetStatus  = com.sybase.afx.json.JsonValue.getString("0000000001");	
    }
}