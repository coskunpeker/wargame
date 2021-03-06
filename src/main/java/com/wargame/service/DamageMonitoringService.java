package com.wargame.service;

import com.wargame.constants.MonitoringType;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class DamageMonitoringService implements MonitorService {

    @Override
    public int getStatistics() {
        return new Random().nextInt(100);
    }

    @Override
    public MonitoringType getType() {
        return MonitoringType.DAMAGE;
    }

}