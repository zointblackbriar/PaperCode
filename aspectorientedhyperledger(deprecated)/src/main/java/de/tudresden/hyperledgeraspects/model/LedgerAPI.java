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
import org.hyperledger.fabric.contract.ContractInterface;
import org.hyperledger.fabric.contract.annotation.*;
import org.hyperledger.fabric.ledger.Collection;
import org.hyperledger.fabric.ledger.Ledger;

import java.util.Collections;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */

@Contract(
    name = "LedgerAPI", info =
        @Info(
            title = "Ledger API Examples", description = "Technical Details and use of the Ledger API", version = "0.0.1",
            license = @License(name = "SPDX-License-Identifier: Apache-2.0", url = ""),
            contact = @Contact(email = "ledgerapi@example.com", name = "ledgerapi", url = "http://ledgerapi.me")
        )
)
@Default
public class LedgerAPI implements ContractInterface {

    //~ Static fields/initializers -----------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    public static final String CONTRACT_NAME = "LedgerAPI";

    /**
     * TODO DOCUMENT ME!
     */
    public static final String PRIVATE_RECORDS = "PrivateRecords";

    /**
     * TODO DOCUMENT ME!
     */
    public static final String ORGANIZATION = "myMspId";

    //~ Constructors -------------------------------------------------------------------------------------------------------------

    /**
     * Creates a new {@link LedgerAPI} object.
     */
    public LedgerAPI() {
    }

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param  ctx       TODO DOCUMENT ME!
     * @param  myAssetID TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    @Transaction
    public boolean assetExistsInOrganization(Context ctx, String myAssetID) {
        Collection collection = Ledger.getLedger(ctx).getCollection(LedgerAPI.ORGANIZATION); // could be wrong

        return false; // check if ithe asset exists in the organization
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param  ctx     TODO DOCUMENT ME!
     * @param  myAsset TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    @Transaction
    public boolean assetExistsInPrivateData(Context ctx, String myAsset) {
        Collection collection = Ledger.getLedger(ctx).getCollection(LedgerAPI.PRIVATE_RECORDS);

        return false; // check if ithe asset exists in the private data
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param  ctx       TODO DOCUMENT ME!
     * @param  myAssetID TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    @Transaction
    public boolean assetExistsInWorldState(Context ctx, String myAssetID) {
        Collection collection = Ledger.getLedger(ctx).getCollection(Collection.WORLD);

        return false; // check if ithe asset exists in the world state
    }
}
