package com.b107.treeway.api.sales.service;

import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.member.repository.MemberRepository;
import com.b107.treeway.api.sales.dto.SalesItemResponse;
import com.b107.treeway.api.sales.dto.SalesItemScrapRequest;
import com.b107.treeway.api.sales.entity.SalesItem;
import com.b107.treeway.api.sales.entity.SalesItemScrap;
import com.b107.treeway.api.sales.repository.SalesItemRepository;
import com.b107.treeway.api.sales.repository.SalesItemScrapRepository;
import com.b107.treeway.api.sales.request.MapSalesRequest;
import com.b107.treeway.api.sales.request.SalesItemRequest;
import com.b107.treeway.api.sales.response.MapSalesResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SalesItemService {
    private final SalesItemRepository salesItemRepository;
    private final SalesItemScrapRepository salesItemScrapRepository;
    private final MemberRepository memberRepository;

    public List<MapSalesResponse> getMapSales(MapSalesRequest mapSalesRequest) {
        return salesItemRepository.getMapSales(mapSalesRequest);
    }

    public SalesItemResponse getSalesItem(SalesItemRequest salesItemRequest) {
        Optional<SalesItem> salesItem = salesItemRepository.findById(salesItemRequest.getSalesItemId());
        return salesItem.map(SalesItemResponse::new).orElse(null);
    }

    public List<SalesItemResponse> getAllSalesItems() {
        return salesItemRepository.findAllSalesItems();
    }

    public String scrapSalesItem(SalesItemScrapRequest request) {
        boolean exists = salesItemScrapRepository.existsBySalesItemIdAndMemberId(request.getSalesItemId(), request.getMemberId());
        if (exists) {
            return "이미 스크랩된 매물입니다.";
        }

        SalesItem salesItem = salesItemRepository.findById(request.getSalesItemId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid sales item ID"));
        Member member = memberRepository.findById(request.getMemberId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid member ID"));

        SalesItemScrap salesItemScrap = new SalesItemScrap();
        salesItemScrap.setSalesItem(salesItem);
        salesItemScrap.setMember(member);

        salesItemScrapRepository.save(salesItemScrap);
        return "스크랩 완료!";
    }

    public void deleteSalesItemScrap(Long memberId, Long salesItemId) {
        SalesItemScrap salesItemScrap = salesItemScrapRepository.findByMemberIdAndSalesItemId(memberId, salesItemId)
                .orElseThrow(() -> new IllegalArgumentException("해당 스크랩이 존재하지 않습니다."));
        salesItemScrapRepository.delete(salesItemScrap);
    }

    public boolean isSalesItemScraped(Long memberId, Long salesItemId) {
        return salesItemScrapRepository.existsBySalesItemIdAndMemberId(memberId, salesItemId);
    }

    public List<SalesItemResponse> getScrappedSalesByMember(Long memberId) {
        return salesItemRepository.findScrappedSalesByMember(memberId);
    }
}
