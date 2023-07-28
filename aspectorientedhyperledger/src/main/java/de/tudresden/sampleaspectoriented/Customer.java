/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.sampleaspectoriented;

/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public interface Customer {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    void addCustomer();

    /**
     * TODO DOCUMENT ME!
     *
     * @param name TODO DOCUMENT ME!
     */
    void addCustomerAround(String name);

    /**
     * TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    String addCustomerReturnValue();

    /**
     * TODO DOCUMENT ME!
     *
     * @throws Exception
     */
    void addCustomerThrowsException() throws Exception;
}
