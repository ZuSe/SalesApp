/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.1.3.358
 * mbs - false 
 */
package GBI_SalesApp;

public  class ChangeLogKey extends com.sybase.persistence.AbstractStructure implements com.sybase.reflection.ClassWithMetaData
{
    private static GBI_SalesApp.intrnl.ChangeLogKeyMetaData META_DATA = new GBI_SalesApp.intrnl.ChangeLogKeyMetaData();
    
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
        new com.sybase.sup.client.persistence.ClassDelegate("ChangeLogKey", GBI_SalesApp.ChangeLogKey.class, META_DATA, GBI_SalesApp.GBI_SalesAppDB.getDelegate());
    
    /**
     * Creates an instance of GBI_SalesApp.ChangeLogKey  
     */
    public ChangeLogKey()
    {
        this.setClassDelegate(DELEGATE);
        _init();
    }
    protected void _init()
    {
        
    }
    
    private int __entityType ;  
    
    private long __surrogateKey ;  
    
    public long getAttributeLong(int id)
    {
        switch(id)
        {
        case 530:
            return getSurrogateKey();
        default:
            return super.getAttributeLong(id);
        }
    }
    
    public void setAttributeLong(int id, long v)
    {
        switch(id)
        {
        case 530:
            setSurrogateKey((long)v);
            break;
        default:
            super.setAttributeLong(id, v);
            break;
        }
    }
    public int getAttributeInt(int id)
    {
        switch(id)
        {
        case 529:
            return getEntityType();
        default:
            return super.getAttributeInt(id);
        }
    }
    
    public void setAttributeInt(int id, int v)
    {
        switch(id)
        {
        case 529:
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
        __surrogateKey = value;
    }
}