package com.b107.treeway.api.sales.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SalesItemScrapRequest {
    private Long salesItemId;
    private Long memberId;

    public SalesItemScrapRequest(Long salesItemId, Long memberId) {
        this.salesItemId = salesItemId;
        this.memberId = memberId;
    }
}
