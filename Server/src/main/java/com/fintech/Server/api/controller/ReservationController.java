package com.fintech.Server.api.controller;

import com.fintech.Server.api.dto.ReservationCreateRequestDto;
import com.fintech.Server.api.dto.ReservationListResponseDto;
import com.fintech.Server.api.entity.ReservationEntity;
import com.fintech.Server.api.service.ReservationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservation")
public class ReservationController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) { this.reservationService = reservationService;}

    @GetMapping
    public List<ReservationListResponseDto> getAllReservations() {
        return reservationService.getAllReservations();
    }

    @PostMapping("")
    public ResponseEntity createReservation(@RequestParam Long storageId, @RequestBody ReservationCreateRequestDto request) {
        request.setStorageId(storageId);
        ReservationEntity reservationEntity = reservationService.createReservation(request);
        if (reservationEntity != null) {
            return ResponseEntity.ok(HttpStatus.CREATED);
        } else {
            return ResponseEntity.badRequest().body("예약 실패");
        }
    }

//    @PutMapping("/{reservationId}")
//    public ReservationListResponseDto updateReservation(@PathVariable Long reservationId, @RequestBody ReservationListResponseDto reservationDto) {
//        return reservationService.updateReservation(reservationId, reservationDto);
//    }

    @DeleteMapping("/{reservationId}")
    public void deleteReservation(@PathVariable Long reservationId) {
        reservationService.deleteReservation(reservationId);
    }
}
