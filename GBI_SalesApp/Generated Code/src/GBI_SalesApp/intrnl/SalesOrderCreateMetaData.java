/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.1.3.358
 * mbs - false 
 */  
package GBI_SalesApp.intrnl;

public class SalesOrderCreateMetaData
extends com.sybase.reflection.EntityMetaDataEx
{
    /**
     * Sybase internal use only.
     */
    public SalesOrderCreateMetaData()
    {
        super(GBI_SalesApp.GBI_SalesAppDB.getMetaData());
        _init();
    }
    
    protected void _init()
    {
        setId(7);
        setAttributes(new com.sybase.reflection.AttributeMetaDataList());
        setAttributeMap(new com.sybase.reflection.AttributeMap());
        com.sybase.reflection.AttributeMetaData TYPE_attribute = addAttributeWithParams
        	(368, "TYPE", "string", 
        	1, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"a\"", "varchar(4)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData ID_attribute = addAttributeWithParams
        	(369, "ID", "string", 
        	20, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"b\"", "varchar(80)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData NUMBER_attribute = addAttributeWithParams
        	(370, "NUMBER", "string", 
        	3, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"c\"", "varchar(12)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData MESSAGE_attribute = addAttributeWithParams
        	(371, "MESSAGE", "string", 
        	220, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"d\"", "varchar(880)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData LOG_NO_attribute = addAttributeWithParams
        	(372, "LOG_NO", "string", 
        	20, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"e\"", "varchar(80)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData LOG_MSG_NO_attribute = addAttributeWithParams
        	(373, "LOG_MSG_NO", "string", 
        	6, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"f\"", "varchar(24)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData MESSAGE_V1_attribute = addAttributeWithParams
        	(374, "MESSAGE_V1", "string", 
        	50, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"g\"", "varchar(200)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData MESSAGE_V2_attribute = addAttributeWithParams
        	(375, "MESSAGE_V2", "string", 
        	50, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"h\"", "varchar(200)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData MESSAGE_V3_attribute = addAttributeWithParams
        	(376, "MESSAGE_V3", "string", 
        	50, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"i\"", "varchar(200)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData MESSAGE_V4_attribute = addAttributeWithParams
        	(377, "MESSAGE_V4", "string", 
        	50, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"j\"", "varchar(200)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData PARAMETER_attribute = addAttributeWithParams
        	(378, "PARAMETER", "string", 
        	32, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"l\"", "varchar(128)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData ROW_attribute = addAttributeWithParams
        	(379, "ROW", "int", 
        	-1, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"m\"", "integer", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData FIELD_attribute = addAttributeWithParams
        	(380, "FIELD", "string", 
        	30, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"n\"", "varchar(120)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData SYSTEM_attribute = addAttributeWithParams
        	(381, "SYSTEM", "string", 
        	10, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"o\"", "varchar(40)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData createSalesOrderCalled_attribute = addAttributeWithParams
        	(383, "createSalesOrderCalled", "boolean", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"q\"", "tinyint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData createSalesOrderORDER_HEADER_IN_attribute = addAttributeWithParams
        	(384, "createSalesOrderORDER_HEADER_IN", "GBI_SalesApp.BAPI_SALESORDER_CREATEFROMDAT2_ORDER_HEADER_IN", 
        	-1, 
        	false, false, true, false, true, 
        	false,false, 
        	"\"r\"", "LONG VARCHAR", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData createSalesOrderORDER_ITEMS_IN_attribute = addAttributeWithParams
        	(385, "createSalesOrderORDER_ITEMS_IN", "com.sybase.collections.GenericList<BAPI_SALESORDER_CREATEFROMDAT2_ORDER_ITEMS_IN>", 
        	-1, 
        	false, false, true, false, true, 
        	false,false, 
        	"\"s\"", "LONG VARCHAR", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData createSalesOrderORDER_PARTNERS_attribute = addAttributeWithParams
        	(386, "createSalesOrderORDER_PARTNERS", "com.sybase.collections.GenericList<BAPI_SALESORDER_CREATEFROMDAT2_ORDER_PARTNERS>", 
        	-1, 
        	false, false, true, false, true, 
        	false,false, 
        	"\"t\"", "LONG VARCHAR", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData pending_attribute = addAttributeWithParams
        	(20001, "pending", "boolean", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"pending\"", "tinyint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData pendingChange_attribute = addAttributeWithParams
        	(20002, "pendingChange", "char", 
        	1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"_pc\"", "char(1)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData replayPending_attribute = addAttributeWithParams
        	(20005, "replayPending", "long", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"_rp\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData replayFailure_attribute = addAttributeWithParams
        	(20006, "replayFailure", "long", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"_rf\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData createSalesOrderORDER_HEADER_INValid_attribute = addAttributeWithParams
        	(555, "createSalesOrderORDER_HEADER_INValid", "boolean", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"none\"", "tinyint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData createSalesOrderORDER_ITEMS_INValid_attribute = addAttributeWithParams
        	(556, "createSalesOrderORDER_ITEMS_INValid", "boolean", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"none\"", "tinyint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData createSalesOrderORDER_PARTNERSValid_attribute = addAttributeWithParams
        	(557, "createSalesOrderORDER_PARTNERSValid", "boolean", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"none\"", "tinyint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData surrogateKey_attribute = addAttributeWithParams
        	(382, "surrogateKey", "long", 
        	-1, 
        	false, true, false, false, false, 
        	false,false, 
        	"\"p\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.GLOBAL,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData replayCounter_attribute = addAttributeWithParams
        	(20004, "replayCounter", "long", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"_rc\"", "bigint", "_rc", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData disableSubmit_attribute = addAttributeWithParams
        	(20003, "disableSubmit", "boolean", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"_ds\"", "tinyint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        initAttributeMapFromAttributes();
        setName("SalesOrderCreate");
        setTable("\"gbi_salesapp_1_0_salesordercreate\"");
        setSynchronizationGroup("default");
        this.getKeyAttributes().add((surrogateKey_attribute));
        initNonDefaultCUDOperations("createSalesOrder");
    }
    
    /**
     * Sybase internal use only.
     */
    public  boolean isEntity()
    {
        return true;
    }
    
    /**
     * Sybase internal use only.
     */
    public  boolean isService()
    {
        return false;
    }
}