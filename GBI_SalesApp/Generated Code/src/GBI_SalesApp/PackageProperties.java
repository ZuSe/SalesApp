/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.1.3.358
 * mbs - false 
 */
package GBI_SalesApp;

public  class PackageProperties extends com.sybase.persistence.AbstractEntity implements com.sybase.persistence.MobileBusinessObject, com.sybase.sup.client.persistence.AbstractPackageProperties, com.sybase.reflection.ClassWithMetaData
{
    /** Begin code region: MetaData **/
    private static GBI_SalesApp.intrnl.PackagePropertiesMetaData META_DATA = new GBI_SalesApp.intrnl.PackagePropertiesMetaData();
    
    /**
     * return MetaData object  
     */
    public com.sybase.reflection.ClassMetaData getClassMetaData()
    {
        return META_DATA;
    }
    
    /**
     * return MetaData object  
     */
    public static com.sybase.reflection.EntityMetaData getMetaData()
    {
        return META_DATA;
    }
    
    /** End code region: MetaData **/
    protected static com.sybase.sup.client.persistence.EntityDelegate DELEGATE = 
        com.sybase.sup.client.persistence.DelegateFactory.createEntityDelegate("PackageProperties", GBI_SalesApp.PackageProperties.class, "GBI_SalesApp.PackageProperties", META_DATA, GBI_SalesApp.GBI_SalesAppDB.getDelegate());
    
    
    /** Begin code region: Properties **/
    private java.lang.String __value ;  
    
      
    
      
    
      
    
      
    
    private java.lang.String __key ;  
    
      
    
      
    
    public java.lang.String getAttributeString(int id)
    {
        switch(id)
        {
        case 514:
            return getValue();
        case 513:
            return getKey();
        default:
            return super.getAttributeString(id);
        }
    }
    
    public void setAttributeString(int id, java.lang.String v)
    {
        switch(id)
        {
        case 514:
            setValue((java.lang.String)v);
            break;
        case 513:
            setKey((java.lang.String)v);
            break;
        default:
            super.setAttributeString(id, v);
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
    /** End code region: Properties **/
    
    /** Begin code region: Constructor and init **/
    /**
     * Creates an instance of GBI_SalesApp.PackageProperties  
     */
    public PackageProperties()
    {
        setEntityDelegate(DELEGATE);
        _init();
    }
    protected void _init()
    {
        
    }
    /** End code region: Constructor and init **/
    
    /**
     * get the value of value  
     */
    public java.lang.String getValue()
    {
        
        return __value;
    }
    
    /**
     * Set the value of value  
     */
    public void setValue(java.lang.String value)
    {
        if ((__value == null) != (value == null) || (value != null && ! value.equals(__value)))
        {
            _isDirty = true;
        }
        __value = value;
    }       
    /**
     * get the value of key  
     */
    public java.lang.String getKey()
    {
        
        return __key;
    }
    
    /**
     * Set the value of key  
     */
    public void setKey(java.lang.String value)
    {
        if ((__key == null) != (value == null) || (value != null && ! value.equals(__key)))
        {
            _isDirty = true;
        }
        __key = value;
    }
    
    /**
     * Search mobile business object using surrogateKey
     * @param id surrogateKey
     * @return mobile business object
     */
    public static GBI_SalesApp.PackageProperties find(java.lang.String id)
    {
        Object[] keys = new Object[]{id};
        return (GBI_SalesApp.PackageProperties)(DELEGATE.findEntityWithKeys(keys));
    }
    
    /**
     * Get the mobile business object by surrogate key.
     * @param id surrogate key
     * @return the mobile business object for the surroget key
     * @exception ObjectNotFoundException Thrown if unable to retrieve mobile business object.
     */
    public static GBI_SalesApp.PackageProperties load(java.lang.String id)
    {
        return (GBI_SalesApp.PackageProperties)(DELEGATE.load(id));
    }
    
    /**
     * Get surroget key of the mobile business object  
     */
    public java.lang.String _pk()
    {
        return (java.lang.String)i_pk();
    }
    
    /** Begin code region: Finder methods **/
    /**
     * return MBO count filter by query object  
     */
    public static int getSize(com.sybase.persistence.Query query)
    {
        return DELEGATE.getSize(query);
    }
    
    /**
     * Find a List of PackageProperties
     * @param query The query to be filter.
     * @exception PersistenceException Thrown if unable to retrieve mobile business object.
     */
    public static com.sybase.collections.GenericList<GBI_SalesApp.PackageProperties> findWithQuery(com.sybase.persistence.Query query)
    {
        return (com.sybase.collections.GenericList<GBI_SalesApp.PackageProperties>)(Object)DELEGATE.findWithQuery(query, GBI_SalesApp.PackageProperties.class);
    }
    
    
    
    /**
     * Returns the MBOs that are updated locally but not submitted.  
     */
    public static com.sybase.collections.GenericList<GBI_SalesApp.PackageProperties> getPendingObjects(int skip, int take)
    {
        return (com.sybase.collections.GenericList<GBI_SalesApp.PackageProperties>)(Object)DELEGATE.getPendingObjects(skip, take);
    }
    
    /**
     * Returns the MBOs that are updated locally but not submmited.  
     */
    public static com.sybase.collections.GenericList<GBI_SalesApp.PackageProperties> getPendingObjects()
    {
        return (com.sybase.collections.GenericList<GBI_SalesApp.PackageProperties>)(Object)DELEGATE.getPendingObjects();
    }
    
    /** End code region: Finder methods **/
    /**
     * Returns the log record list.  
     */
    public com.sybase.collections.GenericList<com.sybase.persistence.LogRecord> getLogRecords()
    {
        return GBI_SalesApp.LogRecordImpl.findByEntity("PackageProperties", keyToString());
    }
    
    
    
    
    
    
    
    
    
    
    
    /**
     * Submit pending operations of the mobile business object (ready for sending to server)  
     */
    public static void submitPendingOperations()
    {
        DELEGATE.submitPendingOperations();
    }
    
    /**
     * Cancel all the pending operations (not submitted operation).  
     */
    public static void cancelPendingOperations()
    {
        DELEGATE.cancelPendingOperations();
    }
    
    /**
     * Get the last called operation of the mobile business object  
     */
    public String getLastOperation()
    {
        if (getPendingChange() == 'C')
        {
        }
        else if (getPendingChange() == 'D')
        {
        }
        else if (getPendingChange() == 'U')
        {
        }
        return null;
    }
    
    public GBI_SalesApp.PackageProperties getDownloadState()
    {
        return (GBI_SalesApp.PackageProperties)i_getDownloadState();
    }
    
    public GBI_SalesApp.PackageProperties getOriginalState()
    {
        return (GBI_SalesApp.PackageProperties)i_getOriginalState();
    }
    
    /**
     * Install a callback handler
     */
    public static void registerCallbackHandler(com.sybase.persistence.CallbackHandler handler)
    {
        DELEGATE.registerCallbackHandler(handler);
    }
    
    public static com.sybase.persistence.CallbackHandler getCallbackHandler()
    {
        return DELEGATE.getCallbackHandler();
    }
}