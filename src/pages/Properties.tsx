
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, TrendingUp, SlidersHorizontal, Grid3X3, List, Map } from 'lucide-react';
import Navigation from '@/components/Navigation';
import PropertyGrid from '@/components/PropertyGrid';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price-low');
  const [filterCategory, setFilterCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tokenized Properties
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover premium real estate opportunities in Amaravati. 
              Invest in fractions of high-value properties with blockchain transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {/* Main Filter Row */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search properties in Amaravati..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Property Type Filter */}
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Property Types</SelectItem>
                    <SelectItem value="single-family">Single Family</SelectItem>
                    <SelectItem value="multi-family">Multi Family</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="mixed-use">Mixed Use</SelectItem>
                  </SelectContent>
                </Select>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="returns-high">Returns: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="funding-high">Funding: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                {/* View Mode Toggle */}
                <div className="flex border rounded-lg overflow-hidden">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-none"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'map' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('map')}
                    className="rounded-none"
                  >
                    <Map className="h-4 w-4" />
                  </Button>
                </div>

                {/* Advanced Filters Toggle */}
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Advanced
                </Button>
              </div>
            </div>

            {/* Advanced Filters Panel */}
            {showAdvancedFilters && (
              <div className="bg-gray-50 rounded-lg p-6 border">
                <h3 className="font-semibold text-gray-900 mb-4">Advanced Filters</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range (₹)</label>
                    <div className="flex gap-2">
                      <Input placeholder="Min" type="number" />
                      <Input placeholder="Max" type="number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected ROI</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select ROI" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10-15">10% - 15%</SelectItem>
                        <SelectItem value="15-20">15% - 20%</SelectItem>
                        <SelectItem value="20-25">20% - 25%</SelectItem>
                        <SelectItem value="25+">25%+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Funding Status</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low Funding (0-50%)</SelectItem>
                        <SelectItem value="medium">Medium Funding (50-80%)</SelectItem>
                        <SelectItem value="high">High Funding (80%+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Area Zone</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Zone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="capital-core">Capital Core</SelectItem>
                        <SelectItem value="seed-access">Seed Access Road</SelectItem>
                        <SelectItem value="thullur">Thullur IT Hub</SelectItem>
                        <SelectItem value="mangalagiri">Mangalagiri Hills</SelectItem>
                        <SelectItem value="vijayawada-road">Vijayawada Highway</SelectItem>
                        <SelectItem value="government">Government Complex</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Active Filters */}
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Amaravati Capital Region
                <button className="ml-2 text-blue-600 hover:text-blue-800">×</button>
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                High Returns (15%+)
                <button className="ml-2 text-green-600 hover:text-green-800">×</button>
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                Mixed Property Types
                <button className="ml-2 text-purple-600 hover:text-purple-800">×</button>
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Available Properties (48)
            </h2>
            <div className="text-gray-600 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Showing results for Amaravati Capital Region
            </div>
          </div>

          <PropertyGrid />

          {/* Load More - Hidden since we're showing all 48 */}
          <div className="text-center mt-12">
            <p className="text-gray-600">Showing all 48 available properties</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
