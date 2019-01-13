package hu.elte.assignment.config;

import hu.elte.assignment.interceptor.DelayerInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    private final DelayerInterceptor delayerInterceptor;

    @Autowired
    public WebMvcConfig(@Lazy DelayerInterceptor delayerInterceptor) {
        this.delayerInterceptor = delayerInterceptor;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(delayerInterceptor);
    }

    @Bean
    public DelayerInterceptor delayerInterceptor() {
        return new DelayerInterceptor();
    }
}