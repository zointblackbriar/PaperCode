package de.aspect.programming.samples.aspectorientation;

import org.springframework.boot.web.servlet.context.ServletWebServerInitializedEvent;
import org.springframework.context.event.EventListener;

public class ServerPortService {
	private int port; 
	
	public int getPort() {
		return port; 
	}
	
	@EventListener
	public void onApplicationEvent(final ServletWebServerInitializedEvent event) {
		port = event.getWebServer().getPort();
	}
}
