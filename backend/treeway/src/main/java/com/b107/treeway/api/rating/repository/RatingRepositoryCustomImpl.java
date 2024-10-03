package com.b107.treeway.api.rating.repository;

import com.b107.treeway.api.rating.entity.*;
import com.b107.treeway.api.rating.request.IndustryRequest;
import com.b107.treeway.api.rating.response.IndustryResponse;
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
    public List<IndustryResponse> getRatingIndustry(IndustryRequest industryRequest) {
        int businessTime = industryRequest.getBusinessTime();
        int region = industryRequest.getRegion();
        int cost = industryRequest.getCost();

        QRating rt = QRating.rating;
        QRegion rg = QRegion.region;
        QIndustryDetail idl = QIndustryDetail.industryDetail;
        QExpectedCost ec = QExpectedCost.expectedCost;
        QBusinessHour bh = QBusinessHour.businessHour;

        JPAQuery<IndustryResponse> query = new JPAQuery<>(entityManager)
                .select(Projections.constructor(
                        IndustryResponse.class,
                        rg.regionName,
                        ec.regionDetail,
                        idl.industryDetailName,
                        ec.cost
                ))
                .from(rt)
                .join(rt.region, rg)
                .join(rt.industryDetail, idl)
                .join(ec).on(ec.industryDetail.industryDetailId.eq(idl.industryDetailId))
                .join(bh).on(bh.industryDetail.industryDetailId.eq(idl.industryDetailId))
                .where(rg.id.eq(30L));

        BooleanExpression conditions = Expressions.TRUE;

        if (businessTime != 0) {
            conditions = conditions.and(bh.businessTime.eq(businessTime));
        }

        if (region != 0) {
//            conditions = conditions.and(rg.id.eq(Long.valueOf(region)));
            conditions = conditions.and(rg.id.eq(Long.valueOf(30)));
        }

        if (cost != 0) {
            conditions = conditions.and(ec.cost.loe(cost));
        }

        query.where(conditions);
        query.limit(9)
             .orderBy(rt.ratingScore.desc());


        List<IndustryResponse> results = query.fetch();
        System.out.println("조회된 결과 개수: " + results.size());


        return query.fetch();
    }
}
