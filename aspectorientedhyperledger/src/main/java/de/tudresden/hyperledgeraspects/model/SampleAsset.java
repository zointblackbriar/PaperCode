/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.hyperledgeraspects.model;

import org.hyperledger.fabric.contract.annotation.DataType;
import org.hyperledger.fabric.contract.annotation.Property;

import org.json.JSONObject;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
@DataType
public class SampleAsset {

    //~ Instance fields ----------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    @Property
    private String value;

    //~ Constructors -------------------------------------------------------------------------------------------------------------

    /**
     * Creates a new {@link SampleAsset} object.
     */
    public SampleAsset() {
    }

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param  json TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    public static SampleAsset fromJSONString(String json) {
        String value = new JSONObject(json).getString("value");
        SampleAsset asset = new SampleAsset();
        asset.setValue(value);

        return asset;
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    public String getValue() {
        return this.value;
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param value TODO DOCUMENT ME!
     */
    public void setValue(String value) {
        this.value = value;
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    public String toJSONString() {
        return new JSONObject(this).toString();
    }
}
