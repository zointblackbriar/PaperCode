/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.aspect.programming.samples.aspectorientation;

import de.aspect.programming.samples.aspectorientation.annotation.SpecialTest;
import de.aspect.programming.samples.aspectorientation.annotation.SpecialTesterInfo;

/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
@SpecialTesterInfo(priority = SpecialTesterInfo.Priority.HIGH, createdBy = "sample", tags = {"test1, test2"})
public class SpecialTestExample {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @throws RuntimeException
     */
    @SpecialTest
    void testA() {
        if (true) {
            throw new RuntimeException("This test always failed");
        }
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @throws RuntimeException
     */
    @SpecialTest(enabled = false)
    void testB() {
        if (false) {
            throw new RuntimeException("This test should always pass");
        }
    }

    /**
     * TODO DOCUMENT ME!
     */
    @SpecialTest // default enabled=true
    void testC() {
        if (10 > 1) {
            System.out.println("This test is going to be valid");
        }
    }
}
