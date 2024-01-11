/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.aspect.programming.samples.aspectorientation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import de.aspect.programming.samples.aspectorientation.annotation.SpecialTest;

import java.lang.annotation.Annotation;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import java.util.Collections;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
@SpringBootApplication
public class AspectorientationApplication {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param  args TODO DOCUMENT ME!
     *
     * @throws IllegalAccessException
     * @throws IllegalArgumentException
     * @throws InvocationTargetException
     * @throws InstantiationException
     */
    public static void main(String[] args) throws IllegalAccessException, IllegalArgumentException, InvocationTargetException,
                                                  InstantiationException {
        Class<SpecialTestExample> obj = SpecialTestExample.class;
        processTest(obj);

        SpringApplication app = new SpringApplication(AspectorientationApplication.class);
        app.setDefaultProperties(Collections.singletonMap("server.port", "7777"));
        app.run(args);
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param  obj TODO DOCUMENT ME!
     *
     * @throws IllegalAccessException
     * @throws IllegalArgumentException
     * @throws InvocationTargetException
     * @throws InstantiationException
     */
    @LogExecutionTime
    private static void processTest(Class<SpecialTestExample> obj) throws IllegalAccessException, IllegalArgumentException,
                                                                          InvocationTargetException, InstantiationException {
        System.out.println("hello world");

        int passed = 0, failed = 0, count = 0, ignore = 0;

        for (Method method : obj.getDeclaredMethods()) {
            if (method.isAnnotationPresent(SpecialTest.class)) {
                Annotation annotation = method.getAnnotation(SpecialTest.class);
                SpecialTest sample = (SpecialTest) annotation;

                if (sample.enabled()) {
                    try {
                        method.invoke(obj.getDeclaredConstructor().newInstance());
                        System.out.println("Test was passed: " + (++count) + " -> " + method.getName());

                        passed++;
                    } catch (Exception ex) {
                        ex.printStackTrace();
                    }
                }
            }
        }
    }
}
