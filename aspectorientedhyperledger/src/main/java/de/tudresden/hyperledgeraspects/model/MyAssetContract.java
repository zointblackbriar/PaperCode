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
 * TODO DOCUMENT ME!
 *
 * @author $author$
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
public class MyAssetContract {

    //~ Constructors -------------------------------------------------------------------------------------------------------------

    /**
     * Creates a new {@link MyAssetContract} object.
     */
    public MyAssetContract() {
    }

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param  ctx       TODO DOCUMENT ME!
     * @param  myAssetID TODO DOCUMENT ME!
     * @param  value     TODO DOCUMENT ME!
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

        MyAsset asset = new MyAsset();
        asset.setValue(value);
        ctx.getStub().putState(myAssetID, asset.toJSONString().getBytes(StandardCharsets.UTF_8));
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
     * TODO DOCUMENT ME!
     *
     * @param  ctx       TODO DOCUMENT ME!
     * @param  myAssetID TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     *
     * @throws IOException
     * @throws RuntimeException
     */
    @Transaction
    public MyAsset readMyAsset(Context ctx, String myAssetID) throws IOException {
        boolean exists = myAssetExists(ctx, myAssetID);

        if (!exists) {
            throw new RuntimeException("The asset " + myAssetID + " does not exist");
        }

        MyAsset asset = MyAsset.fromJSONString(new String(ctx.getStub().getState(myAssetID), StandardCharsets.UTF_8));

        return asset;
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param  ctx       TODO DOCUMENT ME!
     * @param  myAssetId TODO DOCUMENT ME!
     * @param  newValue  TODO DOCUMENT ME!
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

        MyAsset asset = new MyAsset();
        asset.setValue(newValue);
        ctx.getStub().putState(myAssetId, asset.toJSONString().getBytes(StandardCharsets.UTF_8));
    }
}
