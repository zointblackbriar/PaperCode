package de.aspect.programming.samples.aspectorientation.annotation;

import org.springframework.stereotype.Component;

import de.aspect.programming.samples.aspectorientation.LogExecutionTime;

@Component
public class Service {
	
	@LogExecutionTime
	public void serve() throws InterruptedException {
		Thread.sleep(2000);
	}
}
