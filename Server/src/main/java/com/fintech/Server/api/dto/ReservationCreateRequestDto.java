package com.fintech.Server.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ReservationCreateRequestDto {
    private Long reservationId;
    private Date startDate;
    private Date endDate;
    private String itemSize;
    private Integer insurancePlan;
    private Long userId;
    private Long storageId;
    private List<ImageInfo> reservationImages;

    @Data
    public static class ImageInfo {
        private String imageName;
        private String imagePath;
    }
}
