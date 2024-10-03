package com.b107.treeway.api.rating.repository;

import com.b107.treeway.api.rating.entity.QExpectedCost;
import com.b107.treeway.api.rating.entity.QIndustryDetail;
import com.b107.treeway.api.rating.entity.QRating;
import com.b107.treeway.api.rating.entity.QRegion;
import com.b107.treeway.api.rating.response.IndustryResponse;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import java.util.List;

public class RatingRepositoryCustomImpl implements RatingRepositoryCustom {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<IndustryResponse> getRatingIndustry() {
        QRating rt = QRating.rating;
        QRegion rg = QRegion.region;
        QIndustryDetail idl = QIndustryDetail.industryDetail;
        QExpectedCost ec = QExpectedCost.expectedCost;

        return new JPAQuery<>(entityManager)
                .select(Projections.constructor(
                        IndustryResponse.class,
                        rg.regionName,
                        idl.industryDetailName,
                        rt.ratingScore
                ))
                .distinct()
                .from(rt)
                .join(rt.region, rg)
                .join(rt.industryDetail, idl)
                .join(ec).on(ec.industryDetail.industryDetailId.eq(idl.industryDetailId))
//                .where(rg.id.eq(30L))
                .limit(9)
                .orderBy(rt.ratingScore.desc())
                .fetch();
    }
}
