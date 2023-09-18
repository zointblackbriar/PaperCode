/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.aspect.programming.samples.aspectorientation.aspects;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
@Aspect
public class PersonAfterAspect {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param name TODO DOCUMENT ME!
     */
    @After("args(name)")
    public void logStringArguments(String name) {
        System.out.println("Running after advice. String argument passed=" + name);
    }
}
