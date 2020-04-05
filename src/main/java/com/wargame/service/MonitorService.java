package com.wargame.service;

import com.wargame.constants.MonitoringType;

public interface MonitorService {

    int getStatistics();

    MonitoringType getType();
}
