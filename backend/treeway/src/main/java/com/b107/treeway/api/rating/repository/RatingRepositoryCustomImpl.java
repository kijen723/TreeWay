package com.b107.treeway.api.rating.repository;

import com.b107.treeway.api.rating.entity.*;
import com.b107.treeway.api.rating.request.RatingRequest;
import com.b107.treeway.api.rating.request.RegionRatingRequest;
import com.b107.treeway.api.rating.request.SubRatingRequest;
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
    public List<RatingResponse> getIndustryRating(SubRatingRequest subRatingRequest) {
        int businessTime = subRatingRequest.getBusinessTime();
        int region = subRatingRequest.getRegion();
        int cost = subRatingRequest.getCost();

        QRating rt = QRating.rating;
        QRegion rg = QRegion.region;
        QIndustryDetail idl = QIndustryDetail.industryDetail;
        QExpectedCost ec = QExpectedCost.expectedCost;
        QBusinessHour bh = QBusinessHour.businessHour;
        QSalesItem si = QSalesItem.salesItem;

        JPAQuery<RatingResponse> query = new JPAQuery<>(entityManager)
                .select(Projections.constructor(
                        RatingResponse.class,
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
                .join(ec).on(ec.industryDetail.id.eq(idl.id)
                        .and(rg.id.eq(ec.region.id)))
                .join(si).on(si.id.eq(ec.id))
                .join(bh).on(bh.industryDetail.id.eq(idl.id));

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
    public List<RegionRatingResponse> getRegionRating(RegionRatingRequest regionRatingRequest) {

        int businessTime = regionRatingRequest.getBusinessTime();
        int industryItemId = regionRatingRequest.getIndustryItemId();
        int cost = regionRatingRequest.getCost();

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
<<<<<<< HEAD
                .join(ec).on(ec.industryDetail.industryDetailId.eq(idl.industryDetailId)
                        .and(rg.id.eq(ec.region.id)))
                .join(bh).on(bh.industryDetail.industryDetailId.eq(idl.industryDetailId))
                .join(si).on(si.id.eq(ec.id));
=======
                .join(ec).on(ec.industryDetail.id.eq(idl.id)
                            .and(rg.id.eq(ec.region.id)))
                .join(si).on(si.id.eq(ec.id))
                .join(bh).on(bh.industryDetail.id.eq(idl.id));
>>>>>>> 53c6f7c (feat: get industry_detail list)

        BooleanExpression conditions = Expressions.TRUE;

        if (businessTime != 0) {
            conditions = conditions.and(bh.businessTime.eq(businessTime));
        }

        if (industryItemId != 0) {
            conditions = conditions.and(idl.id.eq(Long.valueOf(industryItemId)));
        }

        if (cost != 0) {
            conditions = conditions.and(ec.cost.loe(cost));
        }

        query.where(conditions)
                .limit(9)
                .orderBy(rt.ratingScore.desc());


        return query.fetch();

    }

    /**
     * sub rating 기능에 대해 리팩토링 진행 예정 
     */
    @Override
    @Transactional
    public List<?> getSubRating(SubRatingRequest subRatingRequest, boolean isIndustry) {
        int businessTime = subRatingRequest.getBusinessTime();
        int region = subRatingRequest.getRegion();
        int cost = subRatingRequest.getCost();

        QRating rt = QRating.rating;
        QRegion rg = QRegion.region;
        QIndustryDetail idl = QIndustryDetail.industryDetail;
        QExpectedCost ec = QExpectedCost.expectedCost;
        QBusinessHour bh = QBusinessHour.businessHour;
        QSalesItem si = QSalesItem.salesItem;

        JPAQuery<?> query = getJpaQuery(isIndustry, rg, idl, rt, si, ec, bh);

        if (!isIndustry) {
            query.join(si).on(si.id.eq(ec.id));
        }

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

    private JPAQuery<?> getJpaQuery(boolean isIndustry, QRegion rg, QIndustryDetail idl, QRating rt, QSalesItem si, QExpectedCost ec, QBusinessHour bh) {
        return new JPAQuery<>(entityManager)
                .select(isIndustry
                                ? Projections.constructor(
                                IndustryRatingResponse.class,
                                rg.regionName,
                                idl.industryDetailName,
                                rt.ratingScore
                        )
                                : Projections.constructor(
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
                        )
                )
                .distinct()
                .from(rt)
                .join(rt.region, rg)
                .join(rt.industryDetail, idl)
                .join(ec).on(ec.industryDetail.id.eq(idl.id)
                        .and(rg.id.eq(ec.region.id)))
                .join(bh).on(bh.industryDetail.id.eq(idl.id));
    }


    @Override
    @Transactional
    public List<RatingResponse> getRating(RatingRequest ratingRequest) {
        int industryDetailId = ratingRequest.getIndustryDetailId();
        int businessTime = ratingRequest.getBusinessTime();
        int region = ratingRequest.getRegion();
        int cost = ratingRequest.getCost();

        QRating rt = QRating.rating;
        QRegion rg = QRegion.region;
        QIndustry it = QIndustry.industry;
        QIndustryDetail idl = QIndustryDetail.industryDetail;
        QExpectedCost ec = QExpectedCost.expectedCost;
        QBusinessHour bh = QBusinessHour.businessHour;
        QSalesItem si = QSalesItem.salesItem;

        JPAQuery<RatingResponse> query = new JPAQuery<>(entityManager)
                .select(Projections.constructor(
                        RatingResponse.class,
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
                .join(ec).on(ec.industryDetail.id.eq(idl.id)
                        .and(rg.id.eq(ec.region.id)))
                .join(bh).on(bh.industryDetail.id.eq(idl.id))
                .join(si).on(si.id.eq(ec.id))
                .join(it).on(it.id.eq(idl.industry.id))
                .where(idl.id.eq(Long.valueOf(industryDetailId))
                        .and(rg.id.eq(Long.valueOf(region))));

        BooleanExpression conditions = Expressions.TRUE;

        if (businessTime != 0) {
            conditions = conditions.and(bh.businessTime.eq(businessTime));
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
