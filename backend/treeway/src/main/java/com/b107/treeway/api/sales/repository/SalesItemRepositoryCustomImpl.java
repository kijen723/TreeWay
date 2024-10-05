package com.b107.treeway.api.sales.repository;

import com.b107.treeway.api.rating.entity.QIndustryDetail;
import com.b107.treeway.api.rating.response.IndustryRatingResponse;
import com.b107.treeway.api.sales.entity.QSalesItem;
import com.b107.treeway.api.sales.request.MapSalesRequest;
import com.b107.treeway.api.sales.response.MapSalesResponse;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public class SalesItemRepositoryCustomImpl implements SalesItemRepositoryCustom {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public List<MapSalesResponse> getMapSales(MapSalesRequest mapSalesRequest) {
        Double swLatitude = mapSalesRequest.getSwLatitude();
        Double swLongitude = mapSalesRequest.getSwLongitude();
        Double neLatitude = mapSalesRequest.getNeLatitude();
        Double neLongitude = mapSalesRequest.getNeLongitude();


        QSalesItem si = QSalesItem.salesItem;
        QIndustryDetail idl = QIndustryDetail.industryDetail;
        JPAQuery<MapSalesResponse> query = new JPAQuery<>(entityManager)
                .select(Projections.constructor(
                        MapSalesResponse.class,
                        si.id,
                        si.majorBusiness,
                        idl.industryDetailName,
                        si.address,
                        si.monthlySales,
                        si.monthlyEarnings,
                        si.hostName,
                        si.phone,
                        si.tradeName,
                        si.floorClass,
                        si.currentFloor,
                        si.totalFloors,
                        si.squareMeter,
                        si.availableParking,
                        si.totalParking,
                        si.premium,
                        si.deposit,
                        si.monthlyRent,
                        si.administrationCost,
                        si.materialCost,
                        si.personnelExpense,
                        si.utilityBill,
                        si.otherExpenses,
                        si.additionalInformation,
                        si.itemNum,
                        si.latitude,
                        si.longitude
                ))
                .from(si)
                .join(si).on(si.industryDetail.id.eq(idl.industryDetail.id))
                .where(si.latitude.goe(swLatitude)
                        .and(si.latitude.loe(neLatitude))
                        .and(si.longitude.goe(swLongitude))
                        .and(si.longitude.loe(neLongitude)));

        return query.fetch();
    }
}
