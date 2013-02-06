package GBI_SalesApp.intrnl;

public  class GBI_SalesAppDBMetaData
extends com.sybase.reflection.DatabaseMetaData
{
    /**
     * Sybase internal use only.
     */
    public GBI_SalesAppDBMetaData(com.sybase.sup.client.persistence.DatabaseDelegate dbDelegate)
    {
        this.setDelegate(dbDelegate);
        _init();
    }
    
    protected void _init()
    {
        setId(12);
        setAttributes(new com.sybase.reflection.AttributeMetaDataList());
        setAttributeMap(new com.sybase.reflection.AttributeMap());
        initAttributeMapFromAttributes();
        setName("GBI_SalesAppDB");
        com.sybase.reflection.ClassMetaDataList _classList = new com.sybase.reflection.ClassMetaDataList(20);
        com.sybase.reflection.ClassMap _classMap = new com.sybase.reflection.ClassMap();
        setClassList(_classList);
        setClassMap(_classMap);
        GBI_SalesApp.intrnl.BAPI_SALESORDER_CREATEFROMDAT2_ORDER_HEADER_INMetaData _BAPI_SALESORDER_CREATEFROMDAT2_ORDER_HEADER_INMetaData = (GBI_SalesApp.intrnl.BAPI_SALESORDER_CREATEFROMDAT2_ORDER_HEADER_INMetaData)(GBI_SalesApp.BAPI_SALESORDER_CREATEFROMDAT2_ORDER_HEADER_IN.getMetaData());
        _classList.add(_BAPI_SALESORDER_CREATEFROMDAT2_ORDER_HEADER_INMetaData);
        _classMap.add("BAPI_SALESORDER_CREATEFROMDAT2_ORDER_HEADER_IN", _BAPI_SALESORDER_CREATEFROMDAT2_ORDER_HEADER_INMetaData);
        GBI_SalesApp.intrnl.BAPI_SALESORDER_CREATEFROMDAT2_ORDER_ITEMS_INMetaData _BAPI_SALESORDER_CREATEFROMDAT2_ORDER_ITEMS_INMetaData = (GBI_SalesApp.intrnl.BAPI_SALESORDER_CREATEFROMDAT2_ORDER_ITEMS_INMetaData)(GBI_SalesApp.BAPI_SALESORDER_CREATEFROMDAT2_ORDER_ITEMS_IN.getMetaData());
        _classList.add(_BAPI_SALESORDER_CREATEFROMDAT2_ORDER_ITEMS_INMetaData);
        _classMap.add("BAPI_SALESORDER_CREATEFROMDAT2_ORDER_ITEMS_IN", _BAPI_SALESORDER_CREATEFROMDAT2_ORDER_ITEMS_INMetaData);
        GBI_SalesApp.intrnl.BAPI_SALESORDER_CREATEFROMDAT2_ORDER_PARTNERSMetaData _BAPI_SALESORDER_CREATEFROMDAT2_ORDER_PARTNERSMetaData = (GBI_SalesApp.intrnl.BAPI_SALESORDER_CREATEFROMDAT2_ORDER_PARTNERSMetaData)(GBI_SalesApp.BAPI_SALESORDER_CREATEFROMDAT2_ORDER_PARTNERS.getMetaData());
        _classList.add(_BAPI_SALESORDER_CREATEFROMDAT2_ORDER_PARTNERSMetaData);
        _classMap.add("BAPI_SALESORDER_CREATEFROMDAT2_ORDER_PARTNERS", _BAPI_SALESORDER_CREATEFROMDAT2_ORDER_PARTNERSMetaData);
        GBI_SalesApp.intrnl.CustomerGetDetailsMetaData _CustomerGetDetailsMetaData = (GBI_SalesApp.intrnl.CustomerGetDetailsMetaData)(GBI_SalesApp.CustomerGetDetails.getMetaData());
        _classList.add(_CustomerGetDetailsMetaData);
        _classMap.add("CustomerGetDetails", _CustomerGetDetailsMetaData);
        GBI_SalesApp.intrnl.SalesOrderCreateMetaData _SalesOrderCreateMetaData = (GBI_SalesApp.intrnl.SalesOrderCreateMetaData)(GBI_SalesApp.SalesOrderCreate.getMetaData());
        _classList.add(_SalesOrderCreateMetaData);
        _classMap.add("SalesOrderCreate", _SalesOrderCreateMetaData);
        GBI_SalesApp.intrnl.SalesOrderGetListMetaData _SalesOrderGetListMetaData = (GBI_SalesApp.intrnl.SalesOrderGetListMetaData)(GBI_SalesApp.SalesOrderGetList.getMetaData());
        _classList.add(_SalesOrderGetListMetaData);
        _classMap.add("SalesOrderGetList", _SalesOrderGetListMetaData);
        GBI_SalesApp.intrnl.SalesOrderGetStatusMetaData _SalesOrderGetStatusMetaData = (GBI_SalesApp.intrnl.SalesOrderGetStatusMetaData)(GBI_SalesApp.SalesOrderGetStatus.getMetaData());
        _classList.add(_SalesOrderGetStatusMetaData);
        _classMap.add("SalesOrderGetStatus", _SalesOrderGetStatusMetaData);
        GBI_SalesApp.intrnl.LogRecordImplMetaData _LogRecordImplMetaData = (GBI_SalesApp.intrnl.LogRecordImplMetaData)(GBI_SalesApp.LogRecordImpl.getMetaData());
        _classList.add(_LogRecordImplMetaData);
        _classMap.add("LogRecordImpl", _LogRecordImplMetaData);
        GBI_SalesApp.intrnl.OperationReplayMetaData _OperationReplayMetaData = (GBI_SalesApp.intrnl.OperationReplayMetaData)(GBI_SalesApp.intrnl.OperationReplay.getMetaData());
        _classList.add(_OperationReplayMetaData);
        _classMap.add("OperationReplay", _OperationReplayMetaData);
        GBI_SalesApp.intrnl.SISSubscriptionKeyMetaData _SISSubscriptionKeyMetaData = (GBI_SalesApp.intrnl.SISSubscriptionKeyMetaData)(GBI_SalesApp.intrnl.SISSubscriptionKey.getMetaData());
        _classList.add(_SISSubscriptionKeyMetaData);
        _classMap.add("SISSubscriptionKey", _SISSubscriptionKeyMetaData);
        GBI_SalesApp.intrnl.SISSubscriptionMetaData _SISSubscriptionMetaData = (GBI_SalesApp.intrnl.SISSubscriptionMetaData)(GBI_SalesApp.intrnl.SISSubscription.getMetaData());
        _classList.add(_SISSubscriptionMetaData);
        _classMap.add("SISSubscription", _SISSubscriptionMetaData);
        GBI_SalesApp.intrnl.PackagePropertiesMetaData _PackagePropertiesMetaData = (GBI_SalesApp.intrnl.PackagePropertiesMetaData)(GBI_SalesApp.PackageProperties.getMetaData());
        _classList.add(_PackagePropertiesMetaData);
        _classMap.add("PackageProperties", _PackagePropertiesMetaData);
        GBI_SalesApp.intrnl.ChangeLogKeyMetaData _ChangeLogKeyMetaData = (GBI_SalesApp.intrnl.ChangeLogKeyMetaData)(GBI_SalesApp.ChangeLogKey.getMetaData());
        _classList.add(_ChangeLogKeyMetaData);
        _classMap.add("ChangeLogKey", _ChangeLogKeyMetaData);
        GBI_SalesApp.intrnl.ChangeLogImplMetaData _ChangeLogImplMetaData = (GBI_SalesApp.intrnl.ChangeLogImplMetaData)(GBI_SalesApp.ChangeLogImpl.getMetaData());
        _classList.add(_ChangeLogImplMetaData);
        _classMap.add("ChangeLogImpl", _ChangeLogImplMetaData);
        GBI_SalesApp.intrnl.OfflineAuthenticationMetaData _OfflineAuthenticationMetaData = (GBI_SalesApp.intrnl.OfflineAuthenticationMetaData)(GBI_SalesApp.OfflineAuthentication.getMetaData());
        _classList.add(_OfflineAuthenticationMetaData);
        _classMap.add("OfflineAuthentication", _OfflineAuthenticationMetaData);
        GBI_SalesApp.intrnl.KeyPackageNameMetaData _KeyPackageNameMetaData = (GBI_SalesApp.intrnl.KeyPackageNameMetaData)(GBI_SalesApp.KeyPackageName.getMetaData());
        _classList.add(_KeyPackageNameMetaData);
        _classMap.add("KeyPackageName", _KeyPackageNameMetaData);
        GBI_SalesApp.intrnl.PersonalizationParametersMetaData _PersonalizationParametersMetaData = (GBI_SalesApp.intrnl.PersonalizationParametersMetaData)(GBI_SalesApp.PersonalizationParameters.getMetaData());
        _classList.add(_PersonalizationParametersMetaData);
        _classMap.add("PersonalizationParameters", _PersonalizationParametersMetaData);
        GBI_SalesApp.intrnl.KeyGeneratorMetaData _KeyGeneratorMetaData = (GBI_SalesApp.intrnl.KeyGeneratorMetaData)(GBI_SalesApp.KeyGenerator.getMetaData());
        _classList.add(_KeyGeneratorMetaData);
        _classMap.add("KeyGenerator", _KeyGeneratorMetaData);
        GBI_SalesApp.intrnl.LocalKeyGeneratorMetaData _LocalKeyGeneratorMetaData = (GBI_SalesApp.intrnl.LocalKeyGeneratorMetaData)(GBI_SalesApp.LocalKeyGenerator.getMetaData());
        _classList.add(_LocalKeyGeneratorMetaData);
        _classMap.add("LocalKeyGenerator", _LocalKeyGeneratorMetaData);
        com.sybase.reflection.EntityMetaDataList _entityList = new com.sybase.reflection.EntityMetaDataList(20);
        com.sybase.reflection.EntityMap _entityMap = new com.sybase.reflection.EntityMap();
        setEntityList(_entityList);
        setEntityMap(_entityMap);
        _entityList.add(_LocalKeyGeneratorMetaData);
        _entityMap.add("LocalKeyGenerator", _LocalKeyGeneratorMetaData);
        _entityList.add(_OfflineAuthenticationMetaData);
        _entityMap.add("OfflineAuthentication", _OfflineAuthenticationMetaData);
        _entityList.add(_SalesOrderGetStatusMetaData);
        _entityMap.add("SalesOrderGetStatus", _SalesOrderGetStatusMetaData);
        _entityList.add(_SalesOrderCreateMetaData);
        _entityMap.add("SalesOrderCreate", _SalesOrderCreateMetaData);
        _entityList.add(_SalesOrderGetListMetaData);
        _entityMap.add("SalesOrderGetList", _SalesOrderGetListMetaData);
        _entityList.add(_KeyGeneratorMetaData);
        _entityMap.add("KeyGenerator", _KeyGeneratorMetaData);
        _entityList.add(_PackagePropertiesMetaData);
        _entityMap.add("PackageProperties", _PackagePropertiesMetaData);
        _entityList.add(_SISSubscriptionMetaData);
        _entityMap.add("SISSubscription", _SISSubscriptionMetaData);
        _entityList.add(_OperationReplayMetaData);
        _entityMap.add("OperationReplay", _OperationReplayMetaData);
        _entityList.add(_LogRecordImplMetaData);
        _entityMap.add("LogRecordImpl", _LogRecordImplMetaData);
        _entityList.add(_ChangeLogImplMetaData);
        _entityMap.add("ChangeLogImpl", _ChangeLogImplMetaData);
        _entityList.add(_CustomerGetDetailsMetaData);
        _entityMap.add("CustomerGetDetails", _CustomerGetDetailsMetaData);
        com.sybase.collections.StringList _publications = new com.sybase.collections.StringList(20);
        com.sybase.reflection.EntityListMap _publicationsToEntities = new com.sybase.reflection.EntityListMap();
        _publications.add("SynchronizationGroup1");
        com.sybase.reflection.EntityMetaDataList SynchronizationGroup1Entities = new com.sybase.reflection.EntityMetaDataList(20);
        SynchronizationGroup1Entities.add(_CustomerGetDetailsMetaData);
        SynchronizationGroup1Entities.add(_ChangeLogImplMetaData);
        SynchronizationGroup1Entities.add(_LogRecordImplMetaData);
        SynchronizationGroup1Entities.add(_OperationReplayMetaData);
        SynchronizationGroup1Entities.add(_SISSubscriptionMetaData);
        SynchronizationGroup1Entities.add(_PackagePropertiesMetaData);
        SynchronizationGroup1Entities.add(_KeyGeneratorMetaData);
        _publicationsToEntities.add("SynchronizationGroup1", SynchronizationGroup1Entities);
        _publications.add("SynchronizationGroup2");
        com.sybase.reflection.EntityMetaDataList SynchronizationGroup2Entities = new com.sybase.reflection.EntityMetaDataList(20);
        SynchronizationGroup2Entities.add(_SalesOrderGetListMetaData);
        SynchronizationGroup2Entities.add(_ChangeLogImplMetaData);
        SynchronizationGroup2Entities.add(_LogRecordImplMetaData);
        SynchronizationGroup2Entities.add(_OperationReplayMetaData);
        SynchronizationGroup2Entities.add(_SISSubscriptionMetaData);
        SynchronizationGroup2Entities.add(_PackagePropertiesMetaData);
        SynchronizationGroup2Entities.add(_KeyGeneratorMetaData);
        _publicationsToEntities.add("SynchronizationGroup2", SynchronizationGroup2Entities);
        _publications.add("default");
        com.sybase.reflection.EntityMetaDataList defaultEntities = new com.sybase.reflection.EntityMetaDataList(20);
        defaultEntities.add(_SalesOrderCreateMetaData);
        defaultEntities.add(_SalesOrderGetStatusMetaData);
        defaultEntities.add(_LogRecordImplMetaData);
        defaultEntities.add(_OperationReplayMetaData);
        defaultEntities.add(_SISSubscriptionMetaData);
        defaultEntities.add(_PackagePropertiesMetaData);
        defaultEntities.add(_ChangeLogImplMetaData);
        defaultEntities.add(_KeyGeneratorMetaData);
        _publicationsToEntities.add("default", defaultEntities);
        _publications.add("unsubscribe");
        com.sybase.reflection.EntityMetaDataList unsubscribeEntities = new com.sybase.reflection.EntityMetaDataList(20);
        unsubscribeEntities.add(_KeyGeneratorMetaData);
        _publicationsToEntities.add("unsubscribe", unsubscribeEntities);
        _publications.add("system");
        com.sybase.reflection.EntityMetaDataList systemEntities = new com.sybase.reflection.EntityMetaDataList(20);
        systemEntities.add(_LogRecordImplMetaData);
        systemEntities.add(_OperationReplayMetaData);
        systemEntities.add(_SISSubscriptionMetaData);
        systemEntities.add(_PackagePropertiesMetaData);
        systemEntities.add(_KeyGeneratorMetaData);
        _publicationsToEntities.add("system", systemEntities);
        _publications.add("initialSync");
        com.sybase.reflection.EntityMetaDataList initialSyncEntities = new com.sybase.reflection.EntityMetaDataList(20);
        initialSyncEntities.add(_PackagePropertiesMetaData);
        initialSyncEntities.add(_KeyGeneratorMetaData);
        _publicationsToEntities.add("initialSync", initialSyncEntities);
        setDatabaseFile("gBI_SalesApp1_0.ulj");
        setDatabaseName("gBI_SalesApp1_0");
        initEntityListMap(_publicationsToEntities);
        setSynchronizationGroups(_publications);
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