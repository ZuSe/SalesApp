/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.1.3.358
 * mbs - false 
 */
package GBI_SalesApp;

public  class ChangeLogImpl extends com.sybase.persistence.AbstractEntity implements com.sybase.persistence.ChangeLog, com.sybase.persistence.BusinessObject, com.sybase.reflection.ClassWithMetaData
{
    /** Begin code region: MetaData **/
    private static GBI_SalesApp.intrnl.ChangeLogImplMetaData META_DATA = new GBI_SalesApp.intrnl.ChangeLogImplMetaData();
    
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
        com.sybase.sup.client.persistence.DelegateFactory.createEntityDelegate("ChangeLogImpl", GBI_SalesApp.ChangeLogImpl.class, "GBI_SalesApp.ChangeLogImpl", META_DATA, GBI_SalesApp.GBI_SalesAppDB.getDelegate());
    
    
    /** Begin code region: Properties **/
    private char __operationType ;  
    
    private int __rootEntityType ;  
    
    private long __rootSurrogateKey ;  
    
    private int __entityType ;  
    
    private long __surrogateKey ;  
    
    public long getAttributeLong(int id)
    {
        switch(id)
        {
        case 521:
            return getRootSurrogateKey();
        case 518:
            return getSurrogateKey();
        default:
            return super.getAttributeLong(id);
        }
    }
    
    public void setAttributeLong(int id, long v)
    {
        switch(id)
        {
        case 521:
            setRootSurrogateKey((long)v);
            break;
        case 518:
            setSurrogateKey((long)v);
            break;
        default:
            super.setAttributeLong(id, v);
            break;
        }
    }
    public char getAttributeChar(int id)
    {
        switch(id)
        {
        case 519:
            return getOperationType();
        default:
            return super.getAttributeChar(id);
        }
    }
    
    public void setAttributeChar(int id, char v)
    {
        switch(id)
        {
        case 519:
            setOperationType((char)v);
            break;
        default:
            super.setAttributeChar(id, v);
            break;
        }
    }
    public int getAttributeInt(int id)
    {
        switch(id)
        {
        case 520:
            return getRootEntityType();
        case 517:
            return getEntityType();
        default:
            return super.getAttributeInt(id);
        }
    }
    
    public void setAttributeInt(int id, int v)
    {
        switch(id)
        {
        case 520:
            setRootEntityType((int)v);
            break;
        case 517:
            setEntityType((int)v);
            break;
        default:
            super.setAttributeInt(id, v);
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
     * Creates an instance of GBI_SalesApp.ChangeLogImpl  
     */
    public ChangeLogImpl()
    {
        setEntityDelegate(DELEGATE);
        _init();
    }
    protected void _init()
    {
        
    }
    /** End code region: Constructor and init **/
    
    /**
     * get the value of operationType  
     */
    public char getOperationType()
    {
        
        return __operationType;
    }
    
    /**
     * Set the value of operationType  
     */
    public void setOperationType(char value)
    {
        if(__operationType != value)
        {
            _isDirty = true;
        }
        __operationType = value;
    }       
    /**
     * get the value of rootEntityType  
     */
    public int getRootEntityType()
    {
        
        return __rootEntityType;
    }
    
    /**
     * Set the value of rootEntityType  
     */
    public void setRootEntityType(int value)
    {
        if(__rootEntityType != value)
        {
            _isDirty = true;
        }
        __rootEntityType = value;
    }       
    /**
     * get the value of rootSurrogateKey  
     */
    public long getRootSurrogateKey()
    {
        
        return __rootSurrogateKey;
    }
    
    /**
     * Set the value of rootSurrogateKey  
     */
    public void setRootSurrogateKey(long value)
    {
        if(__rootSurrogateKey != value)
        {
            _isDirty = true;
        }
        __rootSurrogateKey = value;
    }       
    /**
     * get the value of entityType  
     */
    public int getEntityType()
    {
        
        return __entityType;
    }
    
    /**
     * Set the value of entityType  
     */
    public void setEntityType(int value)
    {
        if(__entityType != value)
        {
            _isDirty = true;
        }
        __entityType = value;
    }       
    /**
     * get the value of surrogateKey  
     */
    public long getSurrogateKey()
    {
        
        return __surrogateKey;
    }
    
    /**
     * Set the value of surrogateKey  
     */
    public void setSurrogateKey(long value)
    {
        if(__surrogateKey != value)
        {
            _isDirty = true;
        }
        __surrogateKey = value;
    }
    
    /**
     * Search mobile business object using surrogateKey
     * @param id surrogateKey
     * @return mobile business object
     */
    public static GBI_SalesApp.ChangeLogImpl find(GBI_SalesApp.ChangeLogKey id)
    {
        Object[] keys = new Object[]{id.getEntityType(),id.getSurrogateKey()};
        return (GBI_SalesApp.ChangeLogImpl)(DELEGATE.findEntityWithKeys(keys));
    }
    
    /**
     * Get the mobile business object by surrogate key.
     * @param id surrogate key
     * @return the mobile business object for the surroget key
     * @exception ObjectNotFoundException Thrown if unable to retrieve mobile business object.
     */
    public static GBI_SalesApp.ChangeLogImpl load(GBI_SalesApp.ChangeLogKey id)
    {
        return (GBI_SalesApp.ChangeLogImpl)(DELEGATE.load(id));
    }
    
    /**
     * Get surroget key of the mobile business object  
     */
    public GBI_SalesApp.ChangeLogKey _pk()
    {
        return (GBI_SalesApp.ChangeLogKey)i_pk();
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
     * Find a List of ChangeLogImpl
     * @param query The query to be filter.
     * @exception PersistenceException Thrown if unable to retrieve mobile business object.
     */
    public static com.sybase.collections.GenericList<GBI_SalesApp.ChangeLogImpl> findWithQuery(com.sybase.persistence.Query query)
    {
        return (com.sybase.collections.GenericList<GBI_SalesApp.ChangeLogImpl>)(Object)DELEGATE.findWithQuery(query, GBI_SalesApp.ChangeLogImpl.class);
    }
    
    
    
    /**
     * Returns the MBOs that are updated locally but not submitted.  
     */
    public static com.sybase.collections.GenericList<GBI_SalesApp.ChangeLogImpl> getPendingObjects(int skip, int take)
    {
        return (com.sybase.collections.GenericList<GBI_SalesApp.ChangeLogImpl>)(Object)DELEGATE.getPendingObjects(skip, take);
    }
    
    /**
     * Returns the MBOs that are updated locally but not submmited.  
     */
    public static com.sybase.collections.GenericList<GBI_SalesApp.ChangeLogImpl> getPendingObjects()
    {
        return (com.sybase.collections.GenericList<GBI_SalesApp.ChangeLogImpl>)(Object)DELEGATE.getPendingObjects();
    }
    
    /** End code region: Finder methods **/
    /**
     * Returns the log record list.  
     */
    public com.sybase.collections.GenericList<com.sybase.persistence.LogRecord> getLogRecords()
    {
        return GBI_SalesApp.LogRecordImpl.findByEntity("ChangeLogImpl", keyToString());
    }
    
    
    
    
    
    
    
    
    
    
    /**
     * Delete all the change logs .  
     */
    public static void deleteChangeLogs()
    {
        try
        {
            String sql = "truncate table gbi_salesapp_1_0_changelogimpl";
        	com.sybase.persistence.ConnectionWrapper _conn = GBI_SalesApp.GBI_SalesAppDB.acquireDBWriteConnection();
            com.sybase.afx.ulj.StatementUtil.prepareStatement(_conn, sql).execute();
        }
        catch(Exception ex)
        {
            throw new com.sybase.persistence.PersistenceException(ex);
        }
        finally
        {
            GBI_SalesApp.GBI_SalesAppDB.releaseDBConnection();
        }
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