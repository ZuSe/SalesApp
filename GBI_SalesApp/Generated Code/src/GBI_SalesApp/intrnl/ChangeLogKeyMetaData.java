/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.1.3.358
 * mbs - false 
 */  
package GBI_SalesApp.intrnl;

public class ChangeLogKeyMetaData
extends com.sybase.reflection.ClassMetaData
{
    /**
     * Sybase internal use only.
     */
    public ChangeLogKeyMetaData()
    {
        super(GBI_SalesApp.GBI_SalesAppDB.getMetaData());
        _init();
    }
    
    protected void _init()
    {
        setId(17);
        setAttributes(new com.sybase.reflection.AttributeMetaDataList());
        setAttributeMap(new com.sybase.reflection.AttributeMap());
        com.sybase.reflection.AttributeMetaData entityType_attribute = addAttributeWithParams
        	(515, "entityType", "int", 
        	-1, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"\"", "integer", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData surrogateKey_attribute = addAttributeWithParams
        	(516, "surrogateKey", "long", 
        	-1, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        initAttributeMapFromAttributes();
        setName("ChangeLogKey");
        
    }
    
    /**
     * Sybase internal use only.
     */
    public  boolean isEntity()
    {
        return false;
    }
    
    /**
     * Sybase internal use only.
     */
    public  boolean isService()
    {
        return false;
    }
}