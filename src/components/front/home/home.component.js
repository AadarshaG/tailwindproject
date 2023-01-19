import React from 'react'
import { BestChoice } from '../bestchoice/bestchoice.component'
import { Category } from '../category/category.component'
import { ExploreMore } from '../explore/explore.component'
import { GetOut } from '../getout/getout.component'
import { HorizontalSlider } from '../horizontalslider/horizontalslider.component'
import { Interests } from '../interests/interests.component'
import { ItiBanner } from '../itibanner/itibanner.component'
import { NepalTour } from '../nepals/nepals.component'
import { NextDestination } from '../nextdestination/nextdestination.component'
import { SearchBanner } from '../searchbanner/searchbanner.component'
import { SliderMore } from '../slidermore/slidermore.component'
import { TrendingInTravel } from '../trending/trending.component'


export function HomePage(){

    return(
        <>
            <Category></Category>
            <SearchBanner></SearchBanner>
            <Interests></Interests>
            <NepalTour></NepalTour>
            <GetOut></GetOut>
            <SliderMore></SliderMore>
            <HorizontalSlider></HorizontalSlider>
            <ItiBanner></ItiBanner>
            <ExploreMore></ExploreMore>
            <NextDestination></NextDestination>
            <BestChoice></BestChoice>
            <TrendingInTravel></TrendingInTravel>
        </>
    )
}