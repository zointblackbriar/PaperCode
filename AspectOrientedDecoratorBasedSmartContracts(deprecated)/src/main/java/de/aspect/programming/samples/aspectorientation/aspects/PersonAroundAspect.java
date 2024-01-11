/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.aspect.programming.samples.aspectorientation.aspects;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public class PersonAroundAspect {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param  proceedingJoinPoint TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    @Around("execution(* de.aspect.programming.samples.aspectorientation.model.Person.getName())")
    public Object personAroundAdvice(ProceedingJoinPoint proceedingJoinPoint) {
        System.out.println("Before invoking getName() method");

        Object value = null;

        try {
            value = proceedingJoinPoint.proceed();
        } catch (Throwable e) {
            e.printStackTrace();
        }

        System.out.println("After invoking getName() method. Return value is: " + value);

        return value;
    }
}
