/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.hyperledgeraspects;

import de.tudresden.hyperledgeraspects.decoratorlayer.Retailer;
import de.tudresden.hyperledgeraspects.decoratorlayer.RetailerCompositeDesignPattern;

import org.junit.jupiter.api.Test;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public class DecoratorPatternTest {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @throws Exception
     */
    @Test
    public void testCompositePatternExample() throws Exception {
        RetailerCompositeDesignPattern.RetailerComponent retailer1 = new RetailerCompositeDesignPattern.IndividualRetailer(
                "Retailer A");
        RetailerCompositeDesignPattern.RetailerComponent retailer2 = new RetailerCompositeDesignPattern.IndividualRetailer(
                "Retailer B");
        RetailerCompositeDesignPattern.RetailerGroup group1 = new RetailerCompositeDesignPattern.RetailerGroup("Group X");
        group1.addRetailer(retailer1);
        group1.addRetailer(retailer2);

        RetailerCompositeDesignPattern.RetailerComponent retailer3 = new RetailerCompositeDesignPattern.IndividualRetailer(
                "Retailer C");
        RetailerCompositeDesignPattern.RetailerGroup group2 = new RetailerCompositeDesignPattern.RetailerGroup("Group Y");
        group2.addRetailer(retailer3);

        RetailerCompositeDesignPattern.RetailerGroup rootGroup = new RetailerCompositeDesignPattern.RetailerGroup("Root Group");
        rootGroup.addRetailer(group1);
        rootGroup.addRetailer(group2);

        rootGroup.displayInfo(); // display all information
    }
}
