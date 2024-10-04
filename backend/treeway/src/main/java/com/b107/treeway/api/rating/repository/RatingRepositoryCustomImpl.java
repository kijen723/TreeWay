package com.b107.treeway.api.rating.repository;

import com.b107.treeway.api.rating.entity.*;
import com.b107.treeway.api.rating.request.RatingRequest;
import com.b107.treeway.api.rating.response.RatingResponse;
import com.b107.treeway.api.rating.response.RegionRatingResponse;
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
    public List<RatingResponse> getRating(RatingRequest ratingRequest) {
        int businessTime = ratingRequest.getBusinessTime();
        int region = ratingRequest.getRegion();
        region = 30;
        int cost = ratingRequest.getCost();

        QRating rt = QRating.rating;
        QRegion rg = QRegion.region;
        QIndustryDetail idl = QIndustryDetail.industryDetail;
        QExpectedCost ec = QExpectedCost.expectedCost;
        QBusinessHour bh = QBusinessHour.businessHour;

        JPAQuery<RatingResponse> query = new JPAQuery<>(entityManager)
                .select(Projections.constructor(
                        RatingResponse.class,
                        rg.regionName,
                        ec.regionDetail,
                        idl.industryDetailName,
                        ec.cost
                ))
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
//            conditions = conditions.and(rg.id.eq(Long.valueOf(region)));
            conditions = conditions.and(rg.id.eq(Long.valueOf(region)));
        }

        if (cost != 0) {
            conditions = conditions.and(ec.cost.loe(cost));
        }

        query.where(conditions);
        query.limit(9)
                .orderBy(rt.ratingScore.desc());


        List<RatingResponse> results = query.fetch();
        System.out.println("조회된 결과 개수: " + results.size());


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

        JPAQuery<RegionRatingResponse> query = new JPAQuery<>(entityManager)
                .select(Projections.constructor(
                        RegionRatingResponse.class,
                        rg.regionName,
                        ec.regionDetail
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
//            conditions = conditions.and(rg.id.eq(Long.valueOf(region)));
            conditions = conditions.and(rg.id.eq(Long.valueOf(region)));
        }

        if (cost != 0) {
            conditions = conditions.and(ec.cost.loe(cost));
        }

        query.where(conditions);
        query.limit(9);
//                .orderBy(rt.ratingScore.desc());


        List<RegionRatingResponse> results = query.fetch();
        System.out.println("조회된 결과 개수: " + results.size());


        return query.fetch();
    }
}
