/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.1.3.358
 * mbs - false 
 */  
package GBI_SalesApp.intrnl;

public class KeyPackageNameMetaData
extends com.sybase.reflection.ClassMetaData
{
    /**
     * Sybase internal use only.
     */
    public KeyPackageNameMetaData()
    {
        super(GBI_SalesApp.GBI_SalesAppDB.getMetaData());
        _init();
    }
    
    protected void _init()
    {
        setId(18);
        setAttributes(new com.sybase.reflection.AttributeMetaDataList());
        setAttributeMap(new com.sybase.reflection.AttributeMap());
        com.sybase.reflection.AttributeMetaData key_name_attribute = addAttributeWithParams
        	(544, "key_name", "string", 
        	255, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"\"", "varchar(255)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData package_name_attribute = addAttributeWithParams
        	(546, "package_name", "string", 
        	100, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"\"", "varchar(100)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData user_name_attribute = addAttributeWithParams
        	(545, "user_name", "string", 
        	255, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"\"", "varchar(255)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData domain_name_attribute = addAttributeWithParams
        	(547, "domain_name", "string", 
        	100, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"\"", "varchar(100)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        initAttributeMapFromAttributes();
        setName("KeyPackageName");
        
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