package com.b107.treeway.api.sales.repository;

import com.b107.treeway.api.sales.dto.SalesItemResponse;
import com.b107.treeway.api.sales.entity.SalesItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SalesItemRepository extends JpaRepository<SalesItem, Long> , SalesItemRepositoryCustom {
    @Query("SELECT new com.b107.treeway.api.sales.dto.SalesItemResponse(s.id, s.majorBusiness, s.industryDetail.id, "
            + "s.industryDetail.industryDetailName, s.address, s.monthlySales, s.monthlyEarnings, s.hostName, "
            + "s.tradeName, s.floorClass, s.currentFloor, s.totalFloors, s.squareMeter, s.availableParking, "
            + "s.totalParking, s.premium, s.deposit, s.monthlyRent, s.administrationCost, s.materialCost, "
            + "s.personnelExpense, s.utilityBill, s.otherExpenses, s.additionalInformation, s.itemNum, "
            + "s.latitude, s.longitude, (SELECT COUNT(ss) FROM SalesItemScrap ss WHERE ss.salesItem.id = s.id)) "
            + "FROM SalesItem s JOIN s.industryDetail i")
    List<SalesItemResponse> findAllSalesItems();

    @Query("SELECT new com.b107.treeway.api.sales.dto.SalesItemResponse(s.id, s.majorBusiness, id.id, id.industryDetailName, "
            + "s.address, s.monthlySales, s.monthlyEarnings, s.hostName, s.tradeName, s.floorClass, s.currentFloor, s.totalFloors, "
            + "s.squareMeter, s.availableParking, s.totalParking, s.premium, s.deposit, s.monthlyRent, s.administrationCost, "
            + "s.materialCost, s.personnelExpense, s.utilityBill, s.otherExpenses, s.additionalInformation, s.itemNum, "
            + "s.latitude, s.longitude, (SELECT COUNT(ss) FROM SalesItemScrap ss WHERE ss.salesItem.id = s.id)) "
            + "FROM SalesItem s "
            + "JOIN IndustryDetail id ON s.industryDetail.id = id.id "
            + "JOIN SalesItemScrap ss ON ss.salesItem.id = s.id "
            + "WHERE ss.member.id = :memberId")
    List<SalesItemResponse> findScrappedSalesByMember(@Param("memberId") Long memberId);
}
