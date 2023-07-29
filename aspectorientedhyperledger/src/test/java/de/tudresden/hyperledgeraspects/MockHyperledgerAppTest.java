/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.hyperledgeraspects;

import de.tudresden.hyperledgeraspects.model.HyperledgerAssetContract;
import de.tudresden.hyperledgeraspects.model.SampleAsset;

import org.hyperledger.fabric.contract.Context;

import org.json.JSONObject;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.io.IOException;

import java.nio.charset.StandardCharsets;


/**
 * Unit test for simple App.
 */
public class MockHyperledgerAppTest {

    //~ Inner Classes ------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @author $author$
     */

    @Nested
    class AssetCreates {

        //~ Methods --------------------------------------------------------------------------------------------------------------

        /**
         * TODO DOCUMENT ME!
         *
         * @throws IOException
         */
        @Test
        public void assetRead() throws IOException {
            HyperledgerAssetContract myAssetContract = new HyperledgerAssetContract();
            Context ctx = mock(Context.class);
            org.hyperledger.fabric.shim.ChaincodeStub stub = mock(org.hyperledger.fabric.shim.ChaincodeStub.class);
            when(ctx.getStub()).thenReturn(stub);

            SampleAsset asset = new SampleAsset();
            asset.setValue("Valuable");

            JSONObject json = new JSONObject(asset);
            when(stub.getState("10001")).thenReturn(json.toString().getBytes());

            SampleAsset returnedAsset = myAssetContract.readMyAsset(ctx, "10001");
            Assertions.assertEquals(returnedAsset.getValue(), "Valuable");
        }

        /**
         * TODO DOCUMENT ME!
         *
         * @throws IOException
         */
        @Test
        public void newAssetCreate() throws IOException {
            HyperledgerAssetContract myAssetContract = new HyperledgerAssetContract();
            Context ctx = mock(Context.class);
            org.hyperledger.fabric.shim.ChaincodeStub stub = mock(org.hyperledger.fabric.shim.ChaincodeStub.class);
            when(ctx.getStub()).thenReturn(stub);

            // String json = "{'value': 'TheAsset'}";
            JSONObject json = new JSONObject();
            json.put("value", "TheAsset");
            myAssetContract.createAsset(ctx, "10001", "TheAsset");
            verify(stub).putState("10001", json.toString().getBytes(StandardCharsets.UTF_8));
        }
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @author $author$
     */
    @Nested
    class AssetDeletion {

        //~ Methods --------------------------------------------------------------------------------------------------------------

        /**
         * TODO DOCUMENT ME!
         */
        @Test
        public void assetDelete() {
            HyperledgerAssetContract myAssetContract = new HyperledgerAssetContract();
            Context ctx = mock(Context.class);
            org.hyperledger.fabric.shim.ChaincodeStub stub = mock(org.hyperledger.fabric.shim.ChaincodeStub.class);
            when(ctx.getStub()).thenReturn(stub);
            when(stub.getState("10001")).thenReturn(null);

            Exception thrown = Assertions.assertThrows(RuntimeException.class,
                    () -> {myAssetContract.deleteMyAsset(ctx, "10001");});

            Assertions.assertEquals(thrown.getMessage(), "The asset could not be deleted");
        }
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @author $author$
     */
    @Nested
    class AssetExists {

        //~ Methods --------------------------------------------------------------------------------------------------------------

        /**
         * TODO DOCUMENT ME!
         *
         * @throws IOException
         */
        @Test
        public void assetExists() throws IOException {
            HyperledgerAssetContract contract = new HyperledgerAssetContract();
            Context ctx = mock(Context.class);
            org.hyperledger.fabric.shim.ChaincodeStub stub = mock(org.hyperledger.fabric.shim.ChaincodeStub.class);
            when(ctx.getStub()).thenReturn(stub);
            when(stub.getState("10001")).thenReturn(new byte[] {42}); // proper asset here

            boolean result = contract.myAssetExists(ctx, "10001");
            Assertions.assertTrue(result);
        }

        /**
         * TODO DOCUMENT ME!
         *
         * @throws IOException
         */
        @Test
        public void noProperAsset() throws IOException {
            HyperledgerAssetContract contract = new HyperledgerAssetContract();
            Context ctx = mock(Context.class);
            org.hyperledger.fabric.shim.ChaincodeStub stub = mock(org.hyperledger.fabric.shim.ChaincodeStub.class);
            when(ctx.getStub()).thenReturn(stub);
            when(stub.getState("10001")).thenReturn(new byte[] {}); // no proper asset with byte array

            boolean result = contract.myAssetExists(ctx, "10001"); // state is the block number in the network
            Assertions.assertFalse(result);
        }

        /**
         * TODO DOCUMENT ME!
         *
         * @throws IOException
         */
        @Test
        public void testingWithNoKey() throws IOException {
            HyperledgerAssetContract contract = new HyperledgerAssetContract();
            Context ctx = mock(Context.class);
            org.hyperledger.fabric.shim.ChaincodeStub stub = mock(org.hyperledger.fabric.shim.ChaincodeStub.class);
            when(ctx.getStub()).thenReturn(stub);
            when(stub.getState("10002")).thenReturn(null);

            boolean result = contract.myAssetExists(ctx, "10002");
            Assertions.assertFalse(result); // no key should return false result
        }
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @author $author$
     */
    @Nested
    class AssetUpdates {

        //~ Methods --------------------------------------------------------------------------------------------------------------

        /**
         * TODO DOCUMENT ME!
         *
         * @throws IOException
         */
        @Test
        public void updateAsset() throws IOException {
            HyperledgerAssetContract contract = new HyperledgerAssetContract();
            Context ctx = mock(Context.class);
            org.hyperledger.fabric.shim.ChaincodeStub stub = mock(org.hyperledger.fabric.shim.ChaincodeStub.class);
            when(ctx.getStub()).thenReturn(stub);
            when(stub.getState("10001")).thenReturn(new byte[] {42});

            contract.updateMyAsset(ctx, "10001", "updates");

            // String json = "{\"value\": \"updates\"}";
            JSONObject json = new JSONObject();
            json.put("value", "updates");
            verify(stub).putState("10001", json.toString().getBytes(StandardCharsets.UTF_8));
        }

        /**
         * TODO DOCUMENT ME!
         */
        @Test
        public void updateMissingAsset() {
            HyperledgerAssetContract myAssetContract = new HyperledgerAssetContract();
            Context ctx = mock(Context.class);
            org.hyperledger.fabric.shim.ChaincodeStub stub = mock(org.hyperledger.fabric.shim.ChaincodeStub.class);
            when(ctx.getStub()).thenReturn(stub);

            when(stub.getState("10001")).thenReturn(null);

            Exception thrown = Assertions.assertThrows(RuntimeException.class,
                    () -> {myAssetContract.updateMyAsset(ctx, "10001", "TheAsset");});

            Assertions.assertEquals(thrown.getMessage(), "The asset does not exist");
        }
    }
}
