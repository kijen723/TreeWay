package com.b107.treeway.api.rating.repository;

import com.b107.treeway.api.rating.entity.*;
import com.b107.treeway.api.rating.request.RatingRequest;
import com.b107.treeway.api.rating.response.IndustryRatingResponse;
import com.b107.treeway.api.rating.response.RatingResponse;
import com.b107.treeway.api.rating.response.RegionRatingResponse;
import com.b107.treeway.api.sales.entity.QSalesItem;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public class RatingRepositoryCustomImpl implements RatingRepositoryCustom {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public List<IndustryRatingResponse> getIndustryRating(RatingRequest ratingRequest) {
        int businessTime = ratingRequest.getBusinessTime();
        int region = ratingRequest.getRegion();
        int cost = ratingRequest.getCost();

        QRating rt = QRating.rating;
        QRegion rg = QRegion.region;
        QIndustryDetail idl = QIndustryDetail.industryDetail;
        QExpectedCost ec = QExpectedCost.expectedCost;
        QBusinessHour bh = QBusinessHour.businessHour;

        JPAQuery<IndustryRatingResponse> query = new JPAQuery<>(entityManager)
                .select(Projections.constructor(
                        IndustryRatingResponse.class,
                        rg.regionName,
                        idl.industryDetailName,
                        rt.ratingScore
                ))
                .distinct()
                .from(rt)
                .join(rt.region, rg)
                .join(rt.industryDetail, idl)
                .join(ec).on(ec.industryDetail.industryDetailId.eq(idl.industryDetailId)
                        .and(rg.id.eq(ec.region.id)))
                .join(bh).on(bh.industryDetail.industryDetailId.eq(idl.industryDetailId));

        BooleanExpression conditions = Expressions.TRUE;

        if (businessTime != 0) {
            conditions = conditions.and(bh.businessTime.eq(businessTime));
        }

        if (region != 0) {
            conditions = conditions.and(rg.id.eq(Long.valueOf(region)));
        }

        if (cost != 0) {
            conditions = conditions.and(ec.cost.loe(cost));
        }

        query.where(conditions)
                .limit(9)
                .orderBy(rt.ratingScore.desc());

        return query.fetch();
    }

    @Override
    @Transactional
    public List<RegionRatingResponse> getRegionRating(RatingRequest ratingRequest) {

        int businessTime = ratingRequest.getBusinessTime();
        int region = ratingRequest.getRegion();
        int cost = ratingRequest.getCost();

        QRating rt = QRating.rating;
        QRegion rg = QRegion.region;
        QIndustryDetail idl = QIndustryDetail.industryDetail;
        QExpectedCost ec = QExpectedCost.expectedCost;
        QBusinessHour bh = QBusinessHour.businessHour;
        QSalesItem si = QSalesItem.salesItem;

        JPAQuery<RegionRatingResponse> query = new JPAQuery<>(entityManager)
                .select(Projections.constructor(
                        RegionRatingResponse.class,
                        rt.ratingScore,
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
                .distinct()
                .from(rt)
                .join(rt.region, rg)
                .join(rt.industryDetail, idl)
                .join(ec).on(ec.industryDetail.industryDetailId.eq(idl.industryDetailId)
                        .and(rg.id.eq(ec.region.id)))
                .join(bh).on(bh.industryDetail.industryDetailId.eq(idl.industryDetailId))
                .join(si).on(si.industryDetail.industryDetailId.eq(idl.industryDetailId));

        BooleanExpression conditions = Expressions.TRUE;

        if (businessTime != 0) {
            conditions = conditions.and(bh.businessTime.eq(businessTime));
        }

        if (region != 0) {
            conditions = conditions.and(rg.id.eq(Long.valueOf(region)));
        }

        if (cost != 0) {
            conditions = conditions.and(ec.cost.loe(cost));
        }

        query.where(conditions)
                .limit(9)
                .orderBy(rt.ratingScore.desc());


        return query.fetch();

    }
}
