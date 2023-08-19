package com.fintech.Server.api.dto;

import lombok.*;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ReservationListResponseDto {
    private Long reservationId;
    private Date startDate;
    private Date endDate;
    private String itemSize;
    private Integer insurancePlan;
    private Long userId;
    private Long storageId;
    private String status;
    private List<ReservationImageResponseDto> reservationImages;
}