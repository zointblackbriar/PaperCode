/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.aspect.programming.samples.aspectorientation.aspects;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
@Aspect
public class PersonAspect {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    @Before("execution(* de.aspect.programming.samples.aspectorientation.service.*.get*())")
    public void getAllAdvice() {
        System.out.println("Service method getter called");
    }

    /**
     * TODO DOCUMENT ME!
     */
    @Before("execution(public String getName())")
    public void getNameAdvice() {
        System.out.println("Executing Advice on getName()");
    }
}
