/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.aspect.programming.samples.aspectorientation.service;

import de.aspect.programming.samples.aspectorientation.model.Person;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public class PersonService {

    //~ Instance fields ----------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    private Person person;

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    public Person getPerson() {
        return this.person;
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param person TODO DOCUMENT ME!
     */
    public void setPerson(Person person) {
        this.person = person;
    }
}
