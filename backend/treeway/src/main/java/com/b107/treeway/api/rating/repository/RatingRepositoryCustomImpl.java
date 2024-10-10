package com.b107.treeway.api.rating.repository;

import com.b107.treeway.api.analysis.entity.AnalysisResume;
import com.b107.treeway.api.analysis.repository.AnalysisResumeRepository;
import com.b107.treeway.api.member.repository.MemberRepository;
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
import jakarta.persistence.Query;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class RatingRepositoryCustomImpl implements RatingRepositoryCustom {

    @PersistenceContext
    private EntityManager entityManager;

    private final IndustryDetailRepository industryDetailRepository;
    private final RegionRepository regionRepository;
    private final AnalysisResumeRepository analysisResumeRepository;
    private final int limitCount = 20;

    @Override
    @Transactional
    public List<RatingResponse> getIndustryRating(SubRatingRequest subRatingRequest) {
        int businessTime = subRatingRequest.getBusinessTime();
        int region = subRatingRequest.getRegion();
        int cost = subRatingRequest.getCost();


        StringBuilder sb = new StringBuilder();

        sb.append("WITH RankedRatings AS ( SELECT " +
                        "si1.sales_item_id, r1.rating_score, ")
                .append("si1.major_business, ")
                .append("id1.industry_detail_name, ")
                .append("si1.address, ")
                .append("si1.monthly_sales, ")
                .append("si1.monthly_earnings, ")
                .append("si1.host_name, ")
                .append("si1.phone, ")
                .append("si1.tradename, ")
                .append("si1.floor_class, ")
                .append("si1.current_floor, ")
                .append("si1.total_floors, ")
                .append("si1.square_meter, ")
                .append("si1.available_parking, ")
                .append("si1.total_parking, ")
                .append("si1.premium, ")
                .append("si1.deposit, ")
                .append("si1.monthly_rent, ")
                .append("si1.administration_cost, ")
                .append("si1.material_cost, ")
                .append("si1.personnel_expense, ")
                .append("si1.utility_bill, ")
                .append("si1.other_expenses, ")
                .append("si1.additional_information, ")
                .append("si1.itemnum, ")
                .append("si1.latitude, ")
                .append("si1.longitude, ")
                .append("    ROW_NUMBER() OVER (PARTITION BY id1.industry_detail_name ORDER BY r1.rating_score DESC) AS rn ")
                .append("    FROM rating r1 ")
                .append("    JOIN region r2 ON r2.region_id = r1.region_id ")
                .append("    JOIN industry_detail id1 ON id1.industry_detail_id = r1.industry_detail_id ")
                .append("    JOIN expected_cost ec1 ON ec1.industry_detail_id = r1.industry_detail_id AND r1.region_id = ec1.region_id ")
                .append("    JOIN sales_item si1 ON si1.sales_item_id = ec1.expected_cost_id ")
                .append("    JOIN business_hour bh1 ON bh1.industry_detail_id = r1.industry_detail_id ")
                .append("    WHERE 1=1 ");

        if (businessTime != 0) {
            sb.append("AND bh1.business_time = :businessTime ");
        }

        if (region != 0) {
            sb.append("AND r1.region_id = :region ");
        }

        if (cost != 0) {
            sb.append("AND ec1.cost <= :cost ");
        }

        sb.append(")")
                .append("SELECT * FROM RankedRatings WHERE rn = 1 ORDER BY rating_score DESC LIMIT 9");

        Query query = entityManager.createNativeQuery(sb.toString());

        if (businessTime != 0) {
            query.setParameter("businessTime", businessTime);
        }

        if (region != 0) {
            query.setParameter("region", region);
        }

        if (cost != 0) {
            query.setParameter("cost", cost);
        }

        List resultList = query.getResultList();

        List<RatingResponse> responses = new ArrayList<>();

        for (Object obj : resultList) {
            if (obj instanceof Object[]) {
                Object[] row = (Object[]) obj;

                RatingResponse response = new RatingResponse();
                response.setId((Long) row[0]);
                response.setRatingScore((Double) row[1]);
                response.setMajorBusiness((String) row[2]);
                response.setIndustryDetail((String) row[3]);
                response.setAddress((String) row[4]);
                response.setMonthlySales((Integer) row[5]);
                response.setMonthlyEarnings((Integer) row[6]);
                response.setHostName((String) row[7]);
                response.setPhone((String) row[8]);
                response.setTradeName((String) row[9]);
                response.setFloorClass((String) row[10]);
                response.setCurrentFloor((Integer) row[11]);
                response.setTotalFloors((Integer) row[12]);
                response.setSquareMeter((Integer) row[13]);
                response.setAvailableParking((Integer) row[14]);
                response.setTotalParking((Integer) row[15]);
                response.setPremium((Integer) row[16]);
                response.setDeposit((Integer) row[17]);
                response.setMonthlyRent((Integer) row[18]);
                response.setAdministrationCost((Integer) row[19]);
                response.setMaterialCost((Integer) row[20]);
                response.setPersonnelExpense((Integer) row[21]);
                response.setUtilityBill((Integer) row[22]);
                response.setOtherExpenses((Integer) row[23]);
                response.setAdditionalInformation((String) row[24]);
                response.setItemNum((Integer) row[25]);
                response.setLatitude((Double) row[26]);
                response.setLongitude((Double) row[27]);

                responses.add(response);
            }
        }

        return responses;
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
                .limit(limitCount)
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
                .limit(limitCount)
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
                        si.id,
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
                .limit(limitCount)
                .orderBy(rt.ratingScore.desc());


        List<RatingResponse> result = query.fetch();

        if (!result.isEmpty()) {
            Optional<Region> regionDetail = regionRepository.findById((long) region);
            Optional<IndustryDetail> industryDetail = industryDetailRepository.findById((long) industryDetailId);
            if (regionDetail.isPresent() && industryDetail.isPresent()) {
                Long memberId = ratingRequest.getMemberId();
                String regionDetailName = regionDetail.get().getRegionDetailName();
                String industryName = industryDetail.get().getIndustryDetailName();
                LocalDate currentDate = LocalDate.now();
                Timestamp currentTime = Timestamp.valueOf(currentDate.atStartOfDay());
                Double ratingScore = result.get(0).getRatingScore();
                AnalysisResume analysisResume = new AnalysisResume(memberId, currentTime, industryName, (long) industryDetailId, regionDetailName, (long)region, cost, ratingScore);
                analysisResumeRepository.save(analysisResume);
            }
        }

        return result;
    }
}
