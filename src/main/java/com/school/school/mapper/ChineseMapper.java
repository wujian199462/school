package com.school.school.mapper;

import com.school.school.domain.Chinese;

public interface ChineseMapper {
    int insert(Chinese record);

    int insertSelective(Chinese record);
}
