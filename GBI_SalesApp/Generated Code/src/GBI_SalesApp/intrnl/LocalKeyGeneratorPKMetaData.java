/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.1.3.358
 * mbs - false 
 */  
package GBI_SalesApp.intrnl;

public class LocalKeyGeneratorPKMetaData
extends com.sybase.reflection.ClassMetaData
{
    /**
     * Sybase internal use only.
     */
    public LocalKeyGeneratorPKMetaData()
    {
        super(GBI_SalesApp.GBI_SalesAppDB.getMetaData());
        _init();
    }
    
    protected void _init()
    {
        setId(21);
        setAttributes(new com.sybase.reflection.AttributeMetaDataList());
        setAttributeMap(new com.sybase.reflection.AttributeMap());
        com.sybase.reflection.AttributeMetaData remoteId_attribute = addAttributeWithParams
        	(590, "remoteId", "string", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"\"", "varchar(300)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData batchId_attribute = addAttributeWithParams
        	(591, "batchId", "long", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        initAttributeMapFromAttributes();
        setName("LocalKeyGeneratorPK");
        
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