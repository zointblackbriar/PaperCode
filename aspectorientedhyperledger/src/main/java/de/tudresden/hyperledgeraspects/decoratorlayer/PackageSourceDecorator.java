/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.hyperledgeraspects.decoratorlayer;

/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public class PackageSourceDecorator implements PackageSource {

    //~ Instance fields ----------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    private PackageSource wrappee;

    //~ Constructors -------------------------------------------------------------------------------------------------------------

    // Dependency of Injection
    // @Autowired annotation tag can be used.
    /**
     * Creates a new {@link PackageSourceDecorator} object.
     *
     * @param packageSource TODO DOCUMENT ME!
     */
    public PackageSourceDecorator(PackageSource packageSource) {
        this.wrappee = packageSource;
    }

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param data TODO DOCUMENT ME!
     */
    @Override
    public void getPackage(String data) {
        // TODO Auto-generated method stub
        wrappee.getPackage(data);
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    @Override
    public String readDataFromPackage() {
        // TODO Auto-generated method stub
        return wrappee.readDataFromPackage();
    }
}
