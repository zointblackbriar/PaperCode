/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.hyperledgeraspects.model;

import org.hyperledger.fabric.contract.Context;
import org.hyperledger.fabric.contract.annotation.Contact;
import org.hyperledger.fabric.contract.annotation.Contract;
import org.hyperledger.fabric.contract.annotation.Default;
import org.hyperledger.fabric.contract.annotation.Info;
import org.hyperledger.fabric.contract.annotation.License;
import org.hyperledger.fabric.contract.annotation.Transaction;

import java.io.IOException;

import java.nio.charset.StandardCharsets;


/**
 * Main Contract class for the Hyperledger Aspects sample application.
 *
 * @author Orcun Oruc
 */
@Contract(
    name = "MyAssetContract", info =
        @Info(
            title = "MyAsset contract", description = "Very basic Java Contract example", version = "0.0.1",
            license = @License(name = "SPDX-License-Identifier: Apache-2.0", url = ""),
            contact = @Contact(email = "MyAssetContract@example.com", name = "MyAssetContract", url = "http://MyAssetContract.me")
        )
)
@Default
public class HyperledgerAssetContract {

    //~ Constructors -------------------------------------------------------------------------------------------------------------

    /**
     * Creates a new {@link HyperledgerAssetContract} object.
     */
    public HyperledgerAssetContract() {
    }

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param  ctx       Context parameter indicating
     * @param  myAssetID the id of the asset to be created
     * @param  value     The string value of the asset to be created
     *
     * @throws IOException
     * @throws RuntimeException
     */
    @Transaction
    public void createAsset(Context ctx, String myAssetID, String value) throws IOException {
        boolean exists = myAssetExists(ctx, myAssetID);

        if (exists) {
            throw new RuntimeException("The asset " + myAssetID + " already exists");
        }

        SampleAsset asset = new SampleAsset();
        asset.setValue(value);
        ctx.getStub().putState(myAssetID, asset.toJSONString().getBytes(StandardCharsets.UTF_8));
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param  ctx       Context parameter indicating
     * @param  myAssetID id of the asset to be deleted
     *
     * @return Return boolean value indicating whether the asset was deleted or not
     *
     * @throws IOException
     * @throws RuntimeException
     */
    @Transaction
    public boolean deleteMyAsset(Context ctx, String myAssetID) throws IOException {
        boolean isDeleted = false;
        boolean exists = myAssetExists(ctx, myAssetID);

        if (!exists) {
            throw new RuntimeException("The asset could not be deleted");
        }

        try {
            ctx.getStub().delState(myAssetID);
            isDeleted = true;
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return isDeleted;
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param  ctx       TODO DOCUMENT ME!
     * @param  myAssetID TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     *
     * @throws IOException
     */
    @Transaction
    public boolean myAssetExists(Context ctx, String myAssetID) throws IOException {
        byte[] buffer = ctx.getStub().getState(myAssetID);

        return ((buffer != null) && (buffer.length > 0));
    }

    /**
     * To read an asset by getting its state from the blockchain network.
     *
     * @param  ctx       Context parameter indicating
     * @param  myAssetID assetID necessary
     *
     * @return TODO DOCUMENT ME!
     *
     * @throws IOException
     * @throws RuntimeException
     */
    @Transaction
    public SampleAsset readMyAsset(Context ctx, String myAssetID) throws IOException {
        boolean exists = myAssetExists(ctx, myAssetID);

        if (!exists) {
            throw new RuntimeException("The asset " + myAssetID + " does not exist");
        }

        SampleAsset asset = SampleAsset.fromJSONString(new String(ctx.getStub().getState(myAssetID), StandardCharsets.UTF_8));

        return asset;
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param  ctx       Context parameter indicating
     * @param  myAssetId id of the asset
     * @param  newValue  updating with a new value
     *
     * @throws IOException
     * @throws RuntimeException
     */
    @Transaction
    public void updateMyAsset(Context ctx, String myAssetId, String newValue) throws IOException {
        boolean exists = myAssetExists(ctx, myAssetId);

        if (!exists) {
            throw new RuntimeException("The asset does not exist");
        }

        SampleAsset asset = new SampleAsset();
        asset.setValue(newValue);
        ctx.getStub().putState(myAssetId, asset.toJSONString().getBytes(StandardCharsets.UTF_8));
    }
}
