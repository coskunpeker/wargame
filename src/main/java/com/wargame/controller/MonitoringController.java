package com.wargame.controller;

import com.wargame.service.MonitorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
@RestController
public class MonitoringController {

    final List<MonitorService> serviceList;

    public MonitoringController(List<MonitorService> serviceList) {
        this.serviceList = serviceList;
    }

    @GetMapping("/monitor/{type}")
    public ResponseEntity<Integer> getStatistics(@PathVariable String type) {

        return serviceList.stream()
                .filter(monitorService -> monitorService.getType().toString().equals(type))
                .findAny().map(monitorService -> ResponseEntity.ok(monitorService.getStatistics()))
                .orElseGet(() -> ResponseEntity.noContent().build());

    }
}
