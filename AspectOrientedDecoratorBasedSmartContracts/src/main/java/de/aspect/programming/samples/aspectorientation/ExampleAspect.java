/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.aspect.programming.samples.aspectorientation;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;

import org.springframework.stereotype.Component;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
@Aspect
@Component
public class ExampleAspect {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param  joinPoint TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     *
     * @throws Throwable
     */
    @Around("@annotation(aspect.programming.samples.aspectorientation.LogExecutionTime)")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        final long start = System.currentTimeMillis();

        final Object proceed = joinPoint.proceed();

        final long executionTime = System.currentTimeMillis() - start;

        System.out.println(joinPoint.getSignature() + "executed in " + executionTime + "ms");

        return proceed;
    }
}
